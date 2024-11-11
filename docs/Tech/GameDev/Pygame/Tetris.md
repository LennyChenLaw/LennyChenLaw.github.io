```python
import pygame
import random

# 初始化 Pygame
pygame.init()

# 设置游戏窗口大小和游戏常量
SCREEN_WIDTH = 300
SCREEN_HEIGHT = 600
BLOCK_SIZE = 30
PLAY_WIDTH = 10 * BLOCK_SIZE  # 10 列
PLAY_HEIGHT = 20 * BLOCK_SIZE  # 20 行
GRID_COLOR = (200, 200, 200)
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# 定义俄罗斯方块的形状和旋转
SHAPES = [
    [['.....',
      '.....',
      '..00.',
      '.00..',
      '.....'],
     ['.....',
      '..0..',
      '..00.',
      '...0.',
      '.....']],
    
    [['.....',
      '.....',
      '.00..',
      '..00.',
      '.....'],
     ['.....',
      '..0..',
      '.00..',
      '.0...',
      '.....']],
    
    [['.....',
      '.....',
      '0000.',
      '.....',
      '.....'],
     ['..0..',
      '..0..',
      '..0..',
      '..0..',
      '.....']],
    
    [['.....',
      '.....',
      '.00..',
      '.00..',
      '.....']],
    
    [['.....',
      '.0...',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..00.',
      '..0..',
      '..0..',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '...0.',
      '.....'],
     ['.....',
      '..0..',
      '..0..',
      '.00..',
      '.....']],
    
    [['.....',
      '...0.',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..0..',
      '..0..',
      '..00.',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '.0...',
      '.....'],
     ['.....',
      '.00..',
      '..0..',
      '..0..',
      '.....']],
    
    [['.....',
      '..0..',
      '.000.',
      '.....',
      '.....'],
     ['.....',
      '..0..',
      '..00.',
      '..0..',
      '.....'],
     ['.....',
      '.....',
      '.000.',
      '..0..',
      '.....'],
     ['.....',
      '..0..',
      '.00..',
      '..0..',
      '.....']]
]

# 颜色列表
SHAPE_COLORS = [
    (0, 255, 255), 
    (255, 165, 0), 
    (0, 0, 255), 
    (255, 255, 0), 
    (0, 255, 0), 
    (255, 0, 0), 
    (128, 0, 128)
]

class Piece:
    def __init__(self, x, y, shape):
        self.x = x
        self.y = y
        self.shape = shape
        self.color = SHAPE_COLORS[SHAPES.index(shape)]
        self.rotation = 0

def create_grid(locked_positions={}):
    grid = [[BLACK for _ in range(10)] for _ in range(20)]
    for y in range(len(grid)):
        for x in range(len(grid[y])):
            if (x, y) in locked_positions:
                color = locked_positions[(x, y)]
                grid[y][x] = color
    return grid

def convert_shape_format(piece):
    positions = []
    format = piece.shape[piece.rotation % len(piece.shape)]
    for i, line in enumerate(format):
        row = list(line)
        for j, column in enumerate(row):
            if column == '0':
                positions.append((piece.x + j, piece.y + i))
    return positions

def valid_space(piece, grid):
    accepted_positions = [[(j, i) for j in range(10) if grid[i][j] == BLACK] for i in range(20)]
    accepted_positions = [j for sub in accepted_positions for j in sub]
    formatted = convert_shape_format(piece)
    for pos in formatted:
        if pos not in accepted_positions:
            if pos[1] >= 0:
                return False
    return True

def check_lost(positions):
    for pos in positions:
        x, y = pos
        if y < 1:
            return True
    return False

def get_shape():
    return Piece(5, 0, random.choice(SHAPES))

def draw_grid(surface, grid):
    for y in range(len(grid)):
        for x in range(len(grid[y])):
            pygame.draw.rect(surface, grid[y][x], (x * BLOCK_SIZE, y * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE))
    for i in range(20):
        pygame.draw.line(surface, GRID_COLOR, (0, i * BLOCK_SIZE), (PLAY_WIDTH, i * BLOCK_SIZE))
    for j in range(10):
        pygame.draw.line(surface, GRID_COLOR, (j * BLOCK_SIZE, 0), (j * BLOCK_SIZE, PLAY_HEIGHT))

def clear_rows(grid, locked):
    cleared_rows = 0
    for i in range(len(grid)-1, -1, -1):
        row = grid[i]
        if BLACK not in row:
            cleared_rows += 1
            ind = i
            for j in range(len(row)):
                try:
                    del locked[(j, i)]
                except:
                    continue
    if cleared_rows > 0:
        for key in sorted(list(locked), key=lambda x: x[1])[::-1]:
            x, y = key
            if y < ind:
                newKey = (x, y + cleared_rows)
                locked[newKey] = locked.pop(key)
    return cleared_rows

def draw_window(surface, grid):
    surface.fill(WHITE)
    draw_grid(surface, grid)

def main():
    locked_positions = {}
    grid = create_grid(locked_positions)
    change_piece = False
    run = True
    current_piece = get_shape()
    clock = pygame.time.Clock()
    fall_time = 0

    while run:
        grid = create_grid(locked_positions)
        fall_speed = 0.27
        fall_time += clock.get_rawtime()
        clock.tick()

        if fall_time / 1000 >= fall_speed:
            fall_time = 0
            current_piece.y += 1
            if not valid_space(current_piece, grid) and current_piece.y > 0:
                current_piece.y -= 1
                change_piece = True

        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                run = False
            if event.type == pygame.KEYDOWN:
                if event.key == pygame.K_LEFT:
                    current_piece.x -= 1
                    if not valid_space(current_piece, grid):
                        current_piece.x += 1
                elif event.key == pygame.K_RIGHT:
                    current_piece.x += 1
                    if not valid_space(current_piece, grid):
                        current_piece.x -= 1
                elif event.key == pygame.K_DOWN:
                    current_piece.y += 1
                    if not valid_space(current_piece, grid):
                        current_piece.y -= 1
                elif event.key == pygame.K_UP:
                    current_piece.rotation = (current_piece.rotation + 1) % len(current_piece.shape)
                    if not valid_space(current_piece, grid):
                        current_piece.rotation = (current_piece.rotation - 1) % len(current_piece.shape)

        shape_pos = convert_shape_format(current_piece)
        for pos in shape_pos:
            x, y = pos
            if y > -1:
                grid[y][x] = current_piece.color

        if change_piece:
            for pos in shape_pos:
                p = (pos[0], pos[1])
                locked_positions[p] = current_piece.color
            current_piece = get_shape()
            change_piece = False
            clear_rows(grid, locked_positions)

        draw_window(win, grid)
        pygame.display.update()

        if check_lost(locked_positions):
            run = False

    pygame.display.quit()

win = pygame.display.set_mode((PLAY_WIDTH, PLAY_HEIGHT))
pygame.display.set_caption('Tetris')
main()
```