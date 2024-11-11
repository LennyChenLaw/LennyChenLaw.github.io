```python
# 上下左右键移动绿色方块，到达蓝色方块即为到达出口
import pygame
import random
import sys

# 初始化 Pygame
pygame.init()

# 游戏窗口大小
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 600
BLOCK_SIZE = 20

# 颜色定义
WHITE = (255, 255, 255)
GRAY = (192, 192, 192)
BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
BLUE = (0, 0, 255)  # 出口颜色

# 创建游戏窗口
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Maze Game")


# 迷宫生成
def generate_maze(width, height):
    # 创建迷宫网格
    maze = [[1] * (width) for _ in range(height)]

    # DFS生成迷宫
    def carve_passages(x, y):
        directions = [(2, 0), (-2, 0), (0, 2), (0, -2)]
        random.shuffle(directions)
        for dx, dy in directions:
            nx, ny = x + dx, y + dy
            if 0 < nx < width and 0 < ny < height and maze[ny][nx] == 1:
                maze[y + dy // 2][x + dx // 2] = 0  # 打通墙壁
                maze[ny][nx] = 0
                carve_passages(nx, ny)

    maze[1][1] = 0  # 起点
    carve_passages(1, 1)
    maze[height - 2][width - 2] = 0  # 出口
    return maze


# 绘制迷宫
def draw_maze(maze):
    for y, row in enumerate(maze):
        for x, block in enumerate(row):
            color = GRAY if block == 1 else BLACK
            pygame.draw.rect(
                screen, color, (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE)
            )


# 主角类
class Player:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def move(self, dx, dy, maze):
        new_x = self.x + dx
        new_y = self.y + dy

        # 确保新位置在迷宫范围内
        if (
            0 <= new_x < len(maze[0])
            and 0 <= new_y < len(maze)
            and maze[new_y][new_x] == 0
        ):
            self.x = new_x
            self.y = new_y

    def draw(self):
        pygame.draw.rect(
            screen,
            GREEN,
            (self.x * BLOCK_SIZE, self.y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE),
        )


# 游戏主循环
def game_loop():
    maze = generate_maze(SCREEN_WIDTH // BLOCK_SIZE, SCREEN_HEIGHT // BLOCK_SIZE)
    player = Player(1, 1)  # 从(1,1)开始
    clock = pygame.time.Clock()

    # 出口位置
    exit_x = SCREEN_WIDTH // BLOCK_SIZE - 2
    exit_y = SCREEN_HEIGHT // BLOCK_SIZE - 2

    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()

        # 获取键盘按键状态
        keys = pygame.key.get_pressed()
        if keys[pygame.K_UP]:
            player.move(0, -1, maze)
        if keys[pygame.K_DOWN]:
            player.move(0, 1, maze)
        if keys[pygame.K_LEFT]:
            player.move(-1, 0, maze)
        if keys[pygame.K_RIGHT]:
            player.move(1, 0, maze)

        screen.fill(WHITE)  # 设置背景为白色
        draw_maze(maze)
        player.draw()

        # 在出口位置标记不同颜色
        pygame.draw.rect(
            screen,
            BLUE,
            (exit_x * BLOCK_SIZE, exit_y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE),
        )

        # 检查是否到达出口
        if player.x == exit_x and player.y == exit_y:
            print("You've reached the exit!")
            pygame.quit()
            sys.exit()

        pygame.display.flip()
        clock.tick(10)


# 启动游戏
game_loop()
```