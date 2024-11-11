1. ```pip install pygame```
2. 创建snake.py文件，copy以下代码到snake.py文件
3. command prompt运行```python snake.py```

```python
import pygame
import random
import sys

# 初始化 Pygame
pygame.init()

# 设置游戏窗口大小和游戏常量
SCREEN_WIDTH = 600
SCREEN_HEIGHT = 400
BLOCK_SIZE = 20
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)
BLACK = (0, 0, 0)

# 创建游戏窗口
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("Snake Game")

# 字体
font = pygame.font.SysFont(None, 35)

# 绘制得分函数
def draw_score(score):
    score_text = font.render(f"Score: {score}", True, WHITE)
    screen.blit(score_text, [10, 10])

# 蛇的类
class Snake:
    def __init__(self):
        self.body = [[100, 50], [90, 50], [80, 50]]
        self.direction = "RIGHT"
        self.grow = False

    def change_direction(self, direction):
        if direction == "UP" and self.direction != "DOWN":
            self.direction = direction
        if direction == "DOWN" and self.direction != "UP":
            self.direction = direction
        if direction == "LEFT" and self.direction != "RIGHT":
            self.direction = direction
        if direction == "RIGHT" and self.direction != "LEFT":
            self.direction = direction

    def move(self):
        head = self.body[0]
        if self.direction == "UP":
            new_head = [head[0], head[1] - BLOCK_SIZE]
        elif self.direction == "DOWN":
            new_head = [head[0], head[1] + BLOCK_SIZE]
        elif self.direction == "LEFT":
            new_head = [head[0] - BLOCK_SIZE, head[1]]
        elif self.direction == "RIGHT":
            new_head = [head[0] + BLOCK_SIZE, head[1]]

        self.body.insert(0, new_head)
        
        if not self.grow:
            self.body.pop()  # 移除尾部
        else:
            self.grow = False  # 只增长一次

    def check_collision(self):
        # 撞到自己
        for block in self.body[1:]:
            if self.body[0] == block:
                return True
        # 撞到边界
        if (self.body[0][0] < 0 or self.body[0][0] >= SCREEN_WIDTH or
            self.body[0][1] < 0 or self.body[0][1] >= SCREEN_HEIGHT):
            return True
        return False

    def eat_food(self, food_pos):
        # 检查蛇头是否与食物位置重合
        head_x, head_y = self.body[0]
        food_x, food_y = food_pos
        if abs(head_x - food_x) < BLOCK_SIZE and abs(head_y - food_y) < BLOCK_SIZE:
            print(f"Snake ate food at {food_pos}")
            self.grow = True
            return True
        return False

    def draw(self):
        for block in self.body:
            pygame.draw.rect(screen, GREEN, pygame.Rect(block[0], block[1], BLOCK_SIZE, BLOCK_SIZE))

# 食物的类
class Food:
    def __init__(self):
        self.position = self.random_position()

    def random_position(self):
        pos = [int(random.randrange(0, SCREEN_WIDTH // BLOCK_SIZE) * BLOCK_SIZE),
               int(random.randrange(0, SCREEN_HEIGHT // BLOCK_SIZE) * BLOCK_SIZE)]
        print(f"New food position: {pos}")
        return pos

    def spawn_food(self, snake_body):
        self.position = self.random_position()
        while self.position in snake_body:
            self.position = self.random_position()

    def draw(self):
        pygame.draw.rect(screen, RED, pygame.Rect(self.position[0], self.position[1], BLOCK_SIZE, BLOCK_SIZE))

# 主游戏循环
def game_loop():
    snake = Snake()
    food = Food()
    score = 0

    clock = pygame.time.Clock()
    game_over = False

    while not game_over:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                sys.exit()
            elif event.type == pygame.KEYDOWN:
                if event.key == pygame.K_UP:
                    snake.change_direction("UP")
                elif event.key == pygame.K_DOWN:
                    snake.change_direction("DOWN")
                elif event.key == pygame.K_LEFT:
                    snake.change_direction("LEFT")
                elif event.key == pygame.K_RIGHT:
                    snake.change_direction("RIGHT")

        snake.move()

        # 检查是否吃到食物
        if snake.eat_food(food.position):
            score += 1
            food.spawn_food(snake.body)  # 生成新的食物位置
            print(f"Score: {score}")

        # 检查是否碰撞
        if snake.check_collision():
            game_over = True

        # 绘制
        screen.fill(BLACK)
        snake.draw()
        food.draw()
        draw_score(score)
        pygame.display.flip()

        clock.tick(10)

    # 显示游戏结束画面
    screen.fill(BLACK)
    game_over_text = font.render("Game Over!", True, WHITE)
    score_text = font.render(f"Final Score: {score}", True, WHITE)
    screen.blit(game_over_text, [SCREEN_WIDTH // 2 - 70, SCREEN_HEIGHT // 2 - 20])
    screen.blit(score_text, [SCREEN_WIDTH // 2 - 80, SCREEN_HEIGHT // 2 + 20])
    pygame.display.flip()
    pygame.time.delay(2000)
    pygame.quit()

# 启动游戏
game_loop()

```