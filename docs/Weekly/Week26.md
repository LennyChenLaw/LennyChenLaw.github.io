---
comments: True
statistics: True
---

# Technophile周刊（第26期）

<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1945479839&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/lofi_girl" title="Lofi Girl" target="_blank" style="color: #cccccc; text-decoration: none;">Lofi Girl</a> · <a href="https://soundcloud.com/lofi_girl/far-beyond" title="Juliro - Far Beyond" target="_blank" style="color: #cccccc; text-decoration: none;">Juliro - Far Beyond</a></div>

!!! info
    作者：Lenny<br>
    日期：2024年9月29日<br>
    内容：记录分享视频等<br>
    更新时间：周日更新<br>
    本杂志[开源](https://github.com/LennyChenLaw/Weekly)，欢迎[投稿](https://github.com/LennyChenLaw/Weekly/issues)


![qYdx4tj.jpg](https://s2.loli.net/2024/12/05/lsiecu1ITHVq3AJ.jpg)

## 视频
+ [Manim Lesson | Scatterplots](https://www.youtube.com/watch?v=Dst91428HpY)
>{++ax.c2p() that's the coordinate to point. This will convert the a given point that exists on that coordinate system to a point on the entire screen.++}
```python 
from manim import *
import pandas as pd
import os


class ScatterPlotScene(Scene):

    def construct(self):
        # Download data and put in DataFrame
        data_url = "https://raw.githubusercontent.com/thomasnield/machine-learning-demo-data/master/regression/linear_normal.csv"

        df = pd.read_csv(data_url)

        # Add the Axes
        ax = Axes(x_range=[0, 100, 5], y_range=[-20, 200, 10])
        self.add(ax)

        # Add the dots
        for x, y in df.values:
            dot = Dot(ax.c2p(x, y), color=BLUE)
            self.add(dot)


class ScatterPlotAnimatedScene(Scene):

    def construct(self):
        # Download data and put in DataFrame
        data_url = "https://raw.githubusercontent.com/thomasnield/machine-learning-demo-data/master/regression/linear_normal.csv"

        df = pd.read_csv(data_url)

        # Animate the creation of Axes
        ax = Axes(x_range=[0, 100, 5], y_range=[-20, 200, 10])
        self.play(Write(ax))

        self.wait()  # wait for 1 second

        # Animate the creation of dots
        dots = [Dot(ax.c2p(x, y), color=BLUE) for x, y in df.values]
        self.play(LaggedStart(*[Write(dot) for dot in dots], lag_ratio=.05))

        self.wait()  # wait for 1 second


# Execute rendering
if __name__ == "__main__":
    # os.system(r"manim -qk -v WARNING -p --disable_caching -o ScatterPlotScene.png 08142023_scatterplots_in_manim.py ScatterPlotScene")
    os.system(r"manim -qk -v WARNING -p --disable_caching -o ScatterPlotScene.mp4 08142023_scatterplots_in_manim.py ScatterPlotAnimatedScene")
```

+ [The Manim Experience - Creating animations with Python](https://www.youtube.com/watch?v=5anTYHWuMSA)
>A great video for learning how to code and debug. 摘个评论@serg472: If you want to become a programmer this video is exactly how it goes - you try to do something cool, it doesn't work in the unexpected ways, you start googling and trying random stuff, you get meaningless errors you have no idea what they try to tell you, after you fix what seems to be the last error 5 new errors appear you didn't suspect were there, but then at 3am it starts working and it's the best feeling ever that makes you look forward to doing it all over again tomorrow.// t = ValueTracker(10) // always_redraw()

+ [Bayes Theorem in 3 Minutes](https://www.youtube.com/watch?v=-s6ei_v_uOY)
>一个讲Bayes Theorem的视频
```python
from manim import *
from threemds.utils import render_scenes

class BayesTheorem(Scene):
    def construct(self):
        title = Tex("Bayes Theorem", color=BLUE).scale(1.3).to_edge(UL)
        self.play(Write(title))
        self.wait()

        bt_tex = MathTex(r"P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}").scale(1.3)
        self.play(Write(bt_tex))
        self.wait()

class BayesTheoremTex(MathTex):
    def __init__(self, a:str, b: str,  **kwargs):

        tex_strings = []
        p_a = r"P(\text{" + a + r"})"
        p_b = r"P(\text{" + b + "})"
        p_a_b = r"P(\text{" + a + r"}|\text{" + b + r"})"
        p_b_a = r"P(\text{" + b + r"}|\text{" + a + r"})"

        tex =  p_a_b + r" = \frac{" + p_b_a  + r" \times " + p_a + "}{" + p_b + "}"
        print(tex)
        super().__init__(tex, **kwargs)

        global i
        i = 2

        def incr(j):
            global i
            if type(j) == str:
                i += len(j)
            else:
                i += j
            return i

        self.a1 = self[0][i:incr(a)] # capture A
        incr(1)
        self.b1 = self[0][i:incr(b)] # capture b
        self.a_given_b = self[0][0:i+1]
        incr(4)
        self.b2 = self[0][i:incr(b)] # capture b
        incr(1)
        self.a2 = self[0][i:incr(a)] # capture a
        self.b_given_a = self[0][i-len(a)-len(b)-3:i+1]
        incr(4)
        self.a3 = self[0][i:incr(a)] # capture a
        self.p_a = self[0][i-len(a)-2:i+1]
        incr(4)
        self.b3 = self[0][i:incr(b)] # capture b
        self.p_b = self[0][-len(b)-3:]

        VGroup(self.a1, self.a2, self.a3).set_color(RED)
        VGroup(self.b1, self.b2, self.b3).set_color(BLUE)


class VideoGameHomicidalExample1(Scene):
    def construct(self):
        self.add(Tex("Bayes Theorem", color=BLUE).scale(1.3).to_edge(UL))

        p_homicidal_gamer = MathTex(r"P(", r"\text{gamer}", r"|", r"\text{homicidal}", r")", "=", ".85").scale(1.3)
        p_homicidal_gamer[1].set_color(BLUE)
        p_homicidal_gamer[3].set_color(RED)

        self.play(Write(p_homicidal_gamer))
        self.wait()

        p_gamer_homicidal = MathTex(r"P(", r"\text{homicidal}", r"|", r"\text{gamer}", r")", "=", r"\text{ ? }").scale(1.3)
        p_gamer_homicidal[1].set_color(RED)
        p_gamer_homicidal[3].set_color(BLUE)

        VGroup(p_homicidal_gamer.generate_target(), p_gamer_homicidal).arrange(DOWN, buff=.75)

        self.play(MoveToTarget(p_homicidal_gamer), Write(p_gamer_homicidal))
        self.wait()

class VideoGameHomicidalExample2(Scene):
    def construct(self):

        stats = VGroup(
            MathTex(r"P(", r"\text{gamer}", r"|", r"\text{homicidal}", r")", "=", ".85"),
            MathTex(r"P(", r"\text{Gamer}", ") = .19"),
            MathTex(r"P(", r"\text{Homicidal}", ") = .0001"),
            MathTex(r"P(", r"\text{homicidal}", r"|", r"\text{gamer}", r")", "=", r"\text{ ? }")
        ).scale(1.3).arrange(DOWN, buff=.75)

        VGroup(stats[0][3], stats[2][1], stats[3][1]).set_color(RED)
        VGroup(stats[0][1], stats[1][1], stats[3][3]).set_color(BLUE)

        for m in stats:
            self.play(Write(m), lag_ratio=2)
            self.wait()



class VideoGameHomicidalExample3(Scene):
    def construct(self):

        self.add(Tex("Bayes Theorem", color=BLUE).scale(1.3).to_edge(UL))

        bt1 = BayesTheoremTex("A", "B")
        self.play(Write(bt1))
        self.wait()

        bt2 = BayesTheoremTex("Homicidal", "Gamer")
        self.play(ReplacementTransform(bt1, bt2))
        self.wait()

        p_solve = MathTex(r" = \frac{.85 \times .0001 }{.19}")
        p_solve[0][5:10].set_color(RED)
        p_solve[0][12:15].set_color(BLUE)

        a_given_b = bt2.a_given_b.copy()
        self.add(a_given_b)
        VGroup(a_given_b.generate_target(), p_solve).arrange(RIGHT)
        self.play(FadeOut(bt2))

        self.play(MoveToTarget(a_given_b), Write(p_solve))
        self.wait()

        p_solved = MathTex("= .0004").next_to(p_solve, DOWN, buff=.75, aligned_edge=LEFT)
        self.play(Write(p_solved))
        self.wait()
        self.play(Circumscribe(p_solved))
        self.wait()


class VennDiagramBayes(MovingCameraScene):
    def construct(self):

        # change line width behavior on camera zoom
        INITIAL_LINE_WIDTH_MULTIPLE = self.camera.cairo_line_width_multiple
        INITIAL_FRAME_WIDTH = config.frame_width

        def line_scale_down_updater(mobj):
            proportion = self.camera.frame.width / INITIAL_FRAME_WIDTH
            self.camera.cairo_line_width_multiple = INITIAL_LINE_WIDTH_MULTIPLE * proportion

        mobj = Mobject()
        mobj.add_updater(line_scale_down_updater)
        self.add(mobj)

        whole = Circle(radius=3.5,color=YELLOW)
        whole_txt = Tex("100K Population").move_to(whole)
        self.play(*[Write(m) for m in (whole, whole_txt)])
        self.wait()

        gamers = Circle(radius=1.5, color=BLUE).move_to([0,-2,0])
        gamers_txt = Tex("19K Gamers").scale(.75).move_to(gamers)
        self.play(*[Write(m) for m in (gamers, gamers_txt)])
        self.wait()

        homicidals = Circle(radius=.01, color=RED) \
            .move_to(gamers.get_top()) \
            .shift(.005 * DOWN) \
            .rotate(45*DEGREES, about_point=gamers.get_center())

        homicidals_txt = Tex("10 Homicidals") \
            .scale_to_fit_width(homicidals.width * .6) \
            .move_to(homicidals)

        self.play(*[Write(m) for m in (homicidals, homicidals_txt)])
        self.wait()

        self.wait()
        self.camera.frame.save_state()

        self.play(
            self.camera.frame.animate.set(height=homicidals.height * 1.2) \
                .move_to(homicidals),
            run_time=3
        )
        self.wait()

        homicidals_txt.save_state()
        homicidals_play_games_txt = Tex(r"8.5 homicidals","are gamers").arrange(DOWN) \
            .scale_to_fit_width(homicidals.width * .6) \
            .move_to(homicidals) \
            .rotate(45 * DEGREES)

        homicidals_dont_play_games_txt = Tex(r"1.5 homicidals","are not gamers").arrange(DOWN) \
            .scale_to_fit_width(homicidals.width * .4) \
            .move_to(homicidals.get_top()) \
            .next_to(gamers.get_top(), UP, buff=.001) \
            .rotate(45 * DEGREES, about_point=gamers.get_center())

        self.play(Transform(homicidals_txt,
                                       VGroup(homicidals_play_games_txt,
                                            homicidals_dont_play_games_txt)
                                       )
                  )

        self.wait()
        self.play(Restore(homicidals_txt))
        self.wait()
        self.play(Restore(self.camera.frame), run_time=3)
        self.wait()
        self.play(Wiggle(gamers))
        self.wait()
        self.play(Circumscribe(homicidals,color=RED))
        self.wait()

        self.play(
            self.camera.frame.animate.set(height=homicidals.height * 1.2) \
                .move_to(homicidals),
            run_time=3
        )

        intersect = Intersection(homicidals, gamers, color=PURPLE, fill_opacity=.6)
        diff1 = Difference(homicidals, gamers, color=RED, fill_opacity=.6)
        diff2 = Difference(gamers, homicidals, color=BLUE, fill_opacity=.6)

        homicidals_play_games_prop = Tex(r".85") \
            .scale_to_fit_width(homicidals.width * .2) \
            .move_to(homicidals) \
            .rotate(45 * DEGREES)

        homicidals_dont_play_games_prop = Tex(r".15") \
            .scale_to_fit_width(homicidals.width * .2) \
            .move_to(homicidals.get_top()) \
            .next_to(gamers.get_top(), UP, buff=.001) \
            .rotate(45 * DEGREES, about_point=gamers.get_center())

        self.play(*[Write(m) for m in (diff1,diff2,intersect)])

        self.wait()

        self.play(Transform(homicidals_txt,
                           VGroup(homicidals_play_games_prop,
                                homicidals_dont_play_games_prop)
                           )
                  )
        self.wait()
        self.play(
            Restore(self.camera.frame),
            *[FadeOut(m) for m in (diff1,diff2,intersect)],
            run_time=3
        )
        self.wait()


if __name__ == "__main__":
    render_scenes(q='k', scene_names=['VideoGameHomicidalExample2', 'VideoGameHomicidalExample1'])
```


+ [Logistic Regression in 3 Minutes](https://www.youtube.com/watch?v=EKm0spFxFG4)
>一个讲Logistic Regression的视频
```python
import math
import pandas as pd
from manim import *
import os 

class DataPoint(Dot):
    def __init__(self, point: list | np.ndarray, x: float, y: float, color, **kwargs):
        super().__init__(point=point, radius=.15, color=color, **kwargs)
        self.x = x
        self.y = y

def create_model(data: pd.DataFrame, initial_m: float, initial_b: float) -> tuple:

    m_tracker = ValueTracker(initial_m)
    b_tracker = ValueTracker(initial_b)

    ax = Axes(
        x_range=[-0.5, 10],
        y_range=[-0.2, 1.3],
        x_axis_config={"include_tip": False, "include_numbers": False},
        y_axis_config={"include_tip": False, "include_numbers": True}
    )

    # plot points
    false_points = [DataPoint(point=ax.c2p(p.x, p.y), x=p.x, y=p.y, color=RED) for p in data.itertuples() if p.y == 0.0]
    true_points = [DataPoint(point=ax.c2p(p.x, p.y), x=p.x, y=p.y, color=BLUE) for p in data.itertuples() if p.y == 1.0]
    points = [*true_points, *false_points]

    # plot function
    f = lambda x: 1.0 / (1.0 + math.exp(-(b_tracker.get_value() + m_tracker.get_value() * x)))
    plot = always_redraw(lambda: ax.plot(f, color=YELLOW))

    # max line
    max_line = DashedLine(start=ax.c2p(0, 1), end=ax.c2p(10, 1), color=WHITE)

    # likelihood_lines
    likelihood_lines = [
        always_redraw(
            lambda p=p: DashedLine(
                start=p.get_center(),
                end=ax.c2p(p.x, f(p.x)),
                color=p.get_color()
            )
        )
        for p in points
    ]

    return data, m_tracker, b_tracker, ax, points, true_points, false_points, plot, f, max_line, likelihood_lines

class LogisticRegressionScene(Scene):

    def construct(self):

        # build the logistic regression model
        url = r"https://raw.githubusercontent.com/thomasnield/machine-learning-demo-data/master/classification/simple_logistic_regression.csv"

        data, m_tracker, b_tracker, ax, points, true_points, false_points, \
            plot, f, max_line, likelihood_lines = create_model(data=pd.read_csv(url),
                                                               initial_m=0.69267212,
                                                               initial_b=-3.17576395
                                                               )

        # draw and initialize the objects
        self.play(LaggedStartMap(Write, ax),
                  Write(max_line),
                  Write(MathTex("0") \
                        .scale(.8) \
                        .next_to(ax.c2p(0, 0), DL, buff=.2)
                        )
                  )
        self.wait()

        self.play(LaggedStartMap(Write, VGroup(*true_points)))
        self.play(LaggedStartMap(Write, VGroup(*false_points)))
        self.play(Write(plot))
        self.wait()

        # draw axis labels
        x_label = ax.get_x_axis_label(
            Tex("Hours of Rain").scale(0.8), edge=DOWN, direction=DOWN, buff=0.5
        )
        y_label = ax.get_y_axis_label(
            Tex("Probability of Flood").scale(0.8).rotate(90 * DEGREES),
            edge=LEFT,
            direction=LEFT,
            buff=0.3,
        )

        # label x and y axes
        self.play(Write(x_label))
        self.wait()
        self.play(Write(y_label))
        self.wait()
        self.play(Unwrite(x_label), Unwrite(y_label), run_time=1/3)
        self.wait()

        # label true and false data
        true_data_label = Tex("TRUE", color=BLUE).next_to(VGroup(*true_points), UP)
        false_data_label = Tex("FALSE", color=RED).next_to(VGroup(*false_points), UP)

        self.play(Write(true_data_label), Circumscribe(VGroup(*true_points)))
        self.wait()
        self.play(Write(false_data_label), Circumscribe(VGroup(*false_points)))
        self.wait()
        self.play(Unwrite(true_data_label), Unwrite(false_data_label), run_time=1 / 3)
        self.wait()

        # Project likelihood lines
        self.play(LaggedStartMap(Write, VGroup(*likelihood_lines)))
        self.wait()
        self.play(m_tracker.animate.increment_value(-.3), b_tracker.animate.increment_value(-.3))
        self.play(m_tracker.animate.increment_value(.3), b_tracker.animate.increment_value(.3))
        self.play(m_tracker.animate.increment_value(.3), b_tracker.animate.increment_value(.3))
        self.play(m_tracker.animate.increment_value(-.3), b_tracker.animate.increment_value(-.3))
        self.wait()

        # Highlight middle
        self.play(
            Circumscribe(
                VGroup(*[p for p in points if 2.3 < ax.p2c(p.get_center())[0] < 7.5])
            ),
            run_time=3
        )

        # Remove likelihood lines
        self.play(*[Unwrite(mobj) for mobj in (*points, *likelihood_lines)])
        self.wait()

        # trace the curve
        alpha_tracker = ValueTracker(.65)

        # the trace dot that follows the curve
        class TraceDot(Dot):
            def __init__(self, alpha: float):
                self.point = plot.point_from_proportion(alpha)
                super().__init__(point=self.point, color=YELLOW)

                self.x = ax.p2c(self.point)[0]
                self.y = ax.p2c(self.point)[1]

        trace_dot: TraceDot = always_redraw(lambda: TraceDot(alpha_tracker.get_value()))

        # Have a label chase the trace
        trace_label = always_redraw(lambda: MathTex(round(TraceDot(alpha_tracker.get_value()).y, 2)) \
            .scale(.75) \
            .next_to(trace_dot, UL)
        )

        self.play(Write(trace_dot), Write(trace_label))
        self.wait()
        self.play(alpha_tracker.animate.set_value(0.0), run_time=3)
        self.play(alpha_tracker.animate.set_value(1.0), run_time=3)
        self.play(alpha_tracker.animate.set_value(0.65), run_time=3)
        self.wait()

        # demonstrate a prediction
        self.play(alpha_tracker.animate.set_value(.65), run_time=1)
        self.wait()

        predict_line_vert = DashedLine(color=YELLOW,
                                       dash_length=.3,
                                       start=trace_dot.get_center(),
                                       end=ax.c2p(trace_dot.x, 0)
                                       )

        predict_line_horz = DashedLine(color=YELLOW,
                                       dash_length=.3,
                                       start=trace_dot.get_center(),
                                       end=ax.c2p(0, trace_dot.y)
                                       )

        self.play(
            Write(predict_line_vert),
            Write(predict_line_horz)
        )

        predict_label_vert = MathTex(
            round(trace_dot.x, 2)
        ).scale(.8) \
        .next_to(predict_line_vert, DOWN, buff=.25)

        predict_label_horz = MathTex(
            round(trace_dot.y, 2)
        ).scale(.8) \
        .next_to(predict_line_horz, LEFT, buff=.25)

        self.play(Unwrite(trace_label))
        self.play(
            Write(predict_label_vert),
            Write(predict_label_horz)
        )
        self.wait()

        # demonstrate threshhold regions
        def generate_regions(threshold=0.5):
            false_region = Polygon(*[ax.c2p(x, y) for x, y in [(0, 0), (0, threshold), (10, threshold), (10, 0)]],
                                   color=RED, stroke_width=0, fill_opacity=.5) \
                .next_to(Point(ax.c2p(0, 0)), aligned_edge=DL, buff=0)

            true_region = Polygon(*[ax.c2p(x, y) for x, y in [(0, threshold), (0, 1), (10, 1), (10, threshold)]],
                                  color=BLUE, stroke_width=0, fill_opacity=.5) \
                .next_to(Point(ax.c2p(0, threshold)), aligned_edge=DL, buff=0)

            return true_region, false_region

        true_region, false_region = generate_regions()

        true_region.save_state()
        false_region.save_state()

        self.play(
            LaggedStartMap(FadeIn, true_region),
            LaggedStartMap(FadeIn, false_region)
        )

        self.wait()

        self.wait()
        true_text = Text("TRUE", color=WHITE) \
            .move_to(true_region, aligned_edge=RIGHT) \
            .shift(LEFT)

        false_text = Text("FALSE", color=WHITE) \
            .move_to(false_region, aligned_edge=RIGHT) \
            .shift(LEFT)

        self.play(Write(true_text), Write(false_text))
        self.wait()
        self.play(Wiggle(true_text), FocusOn(trace_dot))
        self.wait()
        self.play(FadeOut(true_text), FadeOut(false_text))
        self.wait()

        true_region1, false_region1 = generate_regions(.8)

        self.play(
            Transform(true_region, true_region1),
            Transform(false_region, false_region1)
        )
        self.wait()

        false_text.move_to(false_region1, aligned_edge=RIGHT).shift(LEFT)
        self.play(FadeIn(false_text))
        self.play(Wiggle(false_text), FocusOn(trace_dot))
        self.play(FadeOut(false_text))

        self.wait()

        self.play(
            Restore(true_region), Restore(false_region)
        )
        self.wait()
        true_region2, false_region2 = generate_regions(.2)

        self.play(
            Transform(true_region, true_region2),
            Transform(false_region, false_region2)
        )
        self.wait()

        self.play(
            Restore(true_region), Restore(false_region)
        )

if __name__ == "__main__":
    os.system( r"manim -qk -v WARNING -p --disable_caching -o NeuralNetworkScene.mp4 20220918_logistic_regression.py NeuralNetworkScene")
```


+ [What is FMCW Radar and why is it useful?](https://www.youtube.com/watch?v=xUGWHGjCtII)
>一个讲FMCW Radar的视频，理论部分有点难懂，还是只关注manim的创作部分吧
```python
import math
from typing import Callable, List

import cv2
import numpy as np
from manim import *
from scipy import signal, constants

# config.background_color = BLACK
BACKGROUND_COLOR = ManimColor.from_hex("#183340")
config.background_color = BACKGROUND_COLOR
# config.background_color = ManimColor.from_hex("#253f4b")
# config.background_color = ManimColor.from_hex("#183340")


TX_COLOR = BLUE
RX_COLOR = RED


"""Helpers"""


def pretty_num(n: float) -> str:
    nstr, dec = str(f"{n:.2f}").split(".")

    nstr_fmt = ",".join(
        [nstr[::-1][start : start + 3][::-1] for start in range(0, len(nstr), 3)][::-1]
    )

    return f"{nstr_fmt}.{dec}"


class WeatherRadarTower:
    def __init__(self, **kwargs):
        width_scale = 2
        LINE_STYLE = dict(
            color=WHITE, stroke_width=DEFAULT_STROKE_WIDTH * width_scale * 2
        )

        # Defining the components of the radar tower
        leg = Line(ORIGIN, UP * 3, **LINE_STYLE)
        self.left_leg = leg.copy().shift(LEFT)
        self.right_leg = leg.copy().shift(RIGHT)
        self.middle_leg = leg.copy().shift(DOWN / 1.5)

        self.conn1_y_shift = DOWN / 2
        self.conn1 = Line(
            self.middle_leg.get_center() + self.conn1_y_shift,
            self.right_leg.get_center() + self.conn1_y_shift,
            **LINE_STYLE,
        )
        self.conn2 = Line(
            self.middle_leg.get_center() + self.conn1_y_shift,
            self.left_leg.get_center() + self.conn1_y_shift,
            **LINE_STYLE,
        )
        self.conn3 = self.conn1.copy().shift(-self.conn1_y_shift * 2)
        self.conn4 = self.conn2.copy().shift(-self.conn1_y_shift * 2)

        self.radome = Circle(radius=1.08, **LINE_STYLE).next_to(
            self.middle_leg,
            direction=UP,
            buff=0,
        )

        # Grouping all components
        self.vgroup = VGroup(
            self.left_leg,
            self.right_leg,
            self.middle_leg,
            self.conn1,
            self.conn2,
            self.conn3,
            self.conn4,
            self.radome,
        ).move_to(ORIGIN)

    def get_animation(self):
        return LaggedStart(
            AnimationGroup(
                Create(self.left_leg),
                Create(self.middle_leg),
                Create(self.right_leg),
            ),
            AnimationGroup(
                Create(self.conn1),
                Create(self.conn2),
                Create(self.conn3),
                Create(self.conn4),
            ),
            Create(self.radome),
            lag_ratio=0.75,
        )
class WeatherRadarScene(Scene):
    def construct(self):
        # Create the radar tower object
        radar_tower = WeatherRadarTower()
        
        # Add the radar tower to the scene
        self.add(radar_tower.vgroup)
        
        # Play the animation of building the radar tower
        self.play(radar_tower.get_animation())
        
        # Hold the scene for a moment
        self.wait(2)
```






