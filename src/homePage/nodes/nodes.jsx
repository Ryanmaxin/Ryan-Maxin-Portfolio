import { useEffect } from "react";
import "./nodes.css";

const nodes = "108, 110, 160";

const Nodes = () => {
  let canvas, ctx, mouse, width, height, scalar, resizeTimeout;
  let points = [];
  let animateHeader = false;
  let pause = false;
  useEffect(() => {
    // console.log("rerendered!");
    initialize();
    addListeners();
    animate();
    return () => {
      animateHeader = false;
      clearCanvas();
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("resize", resize);
    };
  });

  // // Main
  function initialize() {
    height = window.innerHeight;
    width = window.innerWidth;
    mouse = { x: width / 2, y: height / 2 };
    canvas = document.getElementById("canvas");

    animateHeader = true;
    scalar = width / 1920;
    ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;

    // Set actual size in memory (scaled to account for extra pixel density).
    const dpr = window.devicePixelRatio || 1;
    // Set the width and height of the canvas to match its size in CSS pixels times the device pixel ratio.
    canvas.width = width * dpr;
    canvas.height = height * dpr;

    // Set the canvas's CSS width and height to its actual width and height.
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    // Normalize coordinate system to use css pixels.
    ctx.scale(dpr, dpr);

    points.splice(0, points.length);
    if (width < 800 || height < 600) {
      pause = true;
      return;
    } else {
      pause = false;
    }
    // masterBox = new Circle({ x: width / 2, y: height / 2 }, 1, width / 5, 0, 0)
    // masterCircle.active = 1

    // create points
    for (let i = 0; i < Math.floor((width / 2 + height / 2) / 5); i += 1) {
      const decider = Math.floor(getRandom(1, 36));
      let radius, dx, dy;
      if (decider > 34) {
        radius = getRandom(50, 75);
        dx = getRandom(-0.05, 0.05) * scalar;
        dy = getRandom(-0.05, 0.05) * scalar;
      } else if (decider > 30 && decider <= 34) {
        radius = getRandom(20, 30);
        dx = getRandom(-0.075, 0.075) * scalar;
        dy = getRandom(-0.075, 0.075) * scalar;
      } else if (decider <= 30) {
        radius = getRandom(2, 5);
        dx = getRandom(-0.1, 0.1) * scalar;
        dy = getRandom(-0.1, 0.1) * scalar;
      }
      let x = Math.random() * (width - radius * 2) + radius;
      let y = Math.random() * (height - radius * 2) + radius;
      if (i !== 0) {
        for (let j = 0; j < points.length; j++) {
          if (
            getDistance({ x: x, y: y }, points[j].pos) -
              radius -
              points[j].radius <
            0
          ) {
            //|| (getDistance({ x: x, y: y }, masterCircle.pos) - radius) - masterCircle.radius < 0
            x = Math.random() * (width - radius * 2) + radius;
            y = Math.random() * (height - radius * 2) + radius;
            j = -1;
          }
        }
      }

      points.push(new Circle({ x: x, y: y }, radius, dx, dy));
    }

    // for each point find the 5 closest points
    // for (let i = 0; i < points.length; i++) {
    //     let closest = [];
    //     let p1 = points[i];
    //     for (let j = 0; j < points.length; j++) {
    //         let p2 = points[j]
    //         if (!(p1 == p2)) {
    //             let placed = false;
    //             for (let k = 0; k < 5; k++) {
    //                 if (!placed) {
    //                     if (closest[k] == undefined) {
    //                         closest[k] = p2;
    //                         placed = true;
    //                     }
    //                     if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
    //                         closest[k] = p2;
    //                         placed = true;
    //                     }
    //                 }
    //             }
    //         }
    //     }
    //     p1.closest = closest;
    // }
  }

  function animate() {
    if (!animateHeader || !canvas) {
      return;
    }
    if (!pause) {
      ctx.clearRect(0, 0, width, height);
      points.forEach((point) => {
        // detect points in range
        // if (Math.abs(getDistance(mouse, point.pos)) < Math.sqrt(10000)) {
        //   point.active = 0.6;
        //   point.lineActive = 0.3;
        //   // point.circle.active = 0.6;
        //   point.update(points);
        // } else if (Math.abs(getDistance(mouse, point.pos)) < Math.sqrt(80000)) {
        //   point.active = 0.3;
        //   point.lineActive = 0.1;
        //   // point.circle.active = 0.3;
        //   point.update(points);
        // } else if (
        //   Math.abs(getDistance(mouse, point.pos)) < Math.sqrt(120000)
        // ) {
        //   point.active = 0.1;
        //   point.lineActive = 0.02;
        //   // point.circle.active = 0.1;
        //   point.update(points);
        // } else if (
        //   Math.abs(getDistance(mouse, point.pos)) < Math.sqrt(150000)
        // ) {
        //   point.active = 0.05;
        //   point.lineActive = 0.005;
        //   // point.circle.active = 0.1;
        //   point.update(points);
        // } else {
        //   point.active = 0;
        //   point.lineActive = 0;
        //   point.update(points);
        //   // point.circle.active = 0;
        // }
        point.active =
          1 / Math.pow(Math.abs(getDistance(mouse, point.pos) / 100), 2) - 0.04;
        // point.lineActive = (1 / Math.pow(Math.abs(getDistance(mouse, point.pos) / 50), 2)) - 0.05
        point.update(points);

        // drawLines(point);
      });
      // masterCircle.draw()
    }

    requestAnimationFrame(animate);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  function Circle(pos, radius, dx, dy) {
    this.pos = pos;
    this.radius = radius;
    this.velocity = { x: dx, y: dy };
    this.mass = 1 / radius;

    this.draw = function () {
      if (this.active <= 0) return;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "#272727";
      ctx.fill();
      ctx.closePath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = `rgba(${nodes},${this.active})`;
      ctx.fill();
    };
    this.update = (points) => {
      if (this.pos.x + this.radius >= width || this.pos.x - this.radius <= 0) {
        this.velocity.x = -this.velocity.x;
      }
      if (this.pos.y + this.radius >= height || this.pos.y - this.radius <= 0) {
        this.velocity.y = -this.velocity.y;
      }

      for (let i = points.indexOf(this); i < points.length; i++) {
        if (this !== points[i]) {
          const distance =
            getDistance(this.pos, points[i].pos) -
            this.radius -
            points[i].radius;
          const thisSmall = this.radius < 20;
          const targetSmall = points[i].radius < 20;
          const thisMed = this.radius >= 20 && this.radius < 30;
          const targetMed = points[i].radius >= 20 && points[i].radius < 30;
          const thisLarge = this.radius >= 50;
          const targetLarge = points[i].radius >= 50;
          let lineWidth = 1;
          if ((thisMed || thisLarge) && (targetMed || targetLarge)) {
            lineWidth = 6;
          } else if (thisLarge && targetLarge) {
            lineWidth = 10;
          }

          if (
            getDistance(this.pos, points[i].pos) -
              this.radius -
              points[i].radius <
            0
          ) {
            //|| (getDistance(this.pos, masterCircle.pos) - this.radius) - masterCircle.radius < 0
            resolveCollision(this, points[i]);
          } else if (
            thisSmall &&
            (targetSmall || targetMed) &&
            distance <= 50 * Math.sqrt(scalar)
          ) {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(points[i].pos.x, points[i].pos.y);

            // make the fill colour fade out the further you are from the mouse
            // const dotDistance =
            //     ((i_dot.pos.x - mouse.x) ** 2 +
            //         (i_dot.pos.y - mouse.y) ** 2) **
            //     0.5;
            // let distanceRatio = dotDistance / dots.d_radius;

            // // make it so it doesnt fade out completely
            // distanceRatio -= 0.3;
            // if (distanceRatio < 0) {
            //     distanceRatio = 0;
            // }
            this.lineActive =
              1 /
                Math.pow(
                  Math.abs(
                    getDistance(mouse, {
                      x: (points[i].pos.x + this.pos.x) / 2,
                      y: (points[i].pos.y + this.pos.y) / 2,
                    }) / 100
                  ),
                  2
                ) -
              0.1;
            ctx.strokeStyle = `rgba(${nodes}, ${this.lineActive})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.closePath();
          } else if (
            thisMed &&
            (targetSmall || targetMed || targetLarge) &&
            distance <= 100 * Math.sqrt(scalar)
          ) {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(points[i].pos.x, points[i].pos.y);

            // make the fill colour fade out the further you are from the mouse
            // const dotDistance =
            //     ((i_dot.pos.x - mouse.x) ** 2 +
            //         (i_dot.pos.y - mouse.y) ** 2) **
            //     0.5;
            // let distanceRatio = dotDistance / dots.d_radius;

            // // make it so it doesnt fade out completely
            // distanceRatio -= 0.3;
            // if (distanceRatio < 0) {
            //     distanceRatio = 0;
            // }
            this.lineActive =
              1 /
                Math.pow(
                  Math.abs(
                    getDistance(mouse, {
                      x: (points[i].pos.x + this.pos.x) / 2,
                      y: (points[i].pos.y + this.pos.y) / 2,
                    }) / 100
                  ),
                  2
                ) -
              0.1;
            ctx.strokeStyle = `rgba(${nodes}, ${this.lineActive})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.closePath();
          } else if (
            thisLarge &&
            (targetLarge || targetMed) &&
            distance <= 200 * Math.sqrt(scalar)
          ) {
            ctx.beginPath();
            ctx.moveTo(this.pos.x, this.pos.y);
            ctx.lineTo(points[i].pos.x, points[i].pos.y);

            // make the fill colour fade out the further you are from the mouse
            // const dotDistance =
            //     ((i_dot.pos.x - mouse.x) ** 2 +
            //         (i_dot.pos.y - mouse.y) ** 2) **
            //     0.5;
            // let distanceRatio = dotDistance / dots.d_radius;

            // // make it so it doesnt fade out completely
            // distanceRatio -= 0.3;
            // if (distanceRatio < 0) {
            //     distanceRatio = 0;
            // }
            this.lineActive =
              1 /
                Math.pow(
                  Math.abs(
                    getDistance(mouse, {
                      x: (points[i].pos.x + this.pos.x) / 2,
                      y: (points[i].pos.y + this.pos.y) / 2,
                    }) / 100
                  ),
                  2
                ) -
              0.1;
            ctx.strokeStyle = `rgba(${nodes}, ${this.lineActive})`;
            ctx.lineWidth = lineWidth;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
      this.pos.x += this.velocity.x;
      this.pos.y += this.velocity.y;
      //interactivity
      this.draw();
    };
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Event handling
  function addListeners() {
    // if (!("ontouchstart" in window)) {
    window.addEventListener("mousemove", mouseMove);
    // }
    window.addEventListener("resize", resize);
  }

  function resize() {
    // clearCanvas();
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      // console.log("resized");
      initialize();
    }, 200); // Adjust the debounce delay as needed
  }

  function mouseMove(e) {
    // console.log("moved");
    let posx = 0;
    let posy = 0;
    if (e.pageX || e.pageY) {
      posx = e.pageX;
      posy = e.pageY;
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posy =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }
    mouse.x = posx;
    mouse.y = posy;
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Util
  function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }
  function getRandom(min, max) {
    return Math.random() * (max - min) + min;
  }
  function rotate(velocity, angle) {
    const rotatedVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
    return rotatedVelocities;
  }

  /**
   * Swaps out two colliding particles' x and y velocities after running through
   * an elastic collision reaction equation
   */

  function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.pos.x - particle.pos.x;
    const yDist = otherParticle.pos.y - particle.pos.y;
    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      // Grab angle between the two colliding particles
      const angle = -Math.atan2(
        otherParticle.pos.y - particle.pos.y,
        otherParticle.pos.x - particle.pos.x
      );

      // Store mass in var for better readability in collision equation
      const m1 = particle.mass;
      const m2 = otherParticle.mass;
      // Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);
      // Velocity after 1d collision equation
      const v1 = {
        x: (u1.x * (m2 - m1)) / (m1 + m2) + (u2.x * 2 * m1) / (m1 + m2),
        y: u1.y,
      };
      const v2 = {
        x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
        y: u2.y,
      };

      // Final velocity after rotating axis back to original location
      const vFinal1 = rotate(v1, -angle);
      const vFinal2 = rotate(v2, -angle);

      // Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x;
      particle.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  }
  return <canvas id="canvas"></canvas>;
};

export default Nodes;
