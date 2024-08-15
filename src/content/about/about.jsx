import "./about.css";
const About = () => {
  return (
    <div id="about">
      <div class="wrapper">
        <h1>About Me</h1>
      </div>
      <div id="aboutBox">
        <section class="infotainer">
          <h4>Greetings!</h4>
          <p>
            I am currently in my 3B term studying computer science at the
            University of Waterloo, and I'm set to graduate in April 2026
            &#127891;. Over the past three years, I've had the privilege of
            gaining hands-on experience through co-ops at four amazing
            companies.
          </p>
          <p>
            I started my journey as a programmer when I took my first compsci
            class in high school, where I instantly fell in love with the
            discipline. The blend of creativity, logic, and the ever-evolving
            landscape of technology fuels my excitement for software
            development, and this is seen reflected in my track record of
            success in co-op roles, personal projects, and academic courses.
          </p>
          <p>
            I aim for a well rounded lifestyle. For me this primarily means
            pursuing physical activity to contrast with my time programming.
            Specifically I have gotten into the routine of weightlifting at the
            gym 3-4 times a week. I also love to play soccer, badminton, ping
            pong, and recently, I've also been challenging myself with rock
            climbing. Outside of fitness, I enjoy playing chess and indulging in
            some quality TV and movies.
          </p>
          <p>
            Looking forward, my goal is to secure a meaningful co-op position
            for summer 2025. I'm eager to apply my skills and enthusiasm to make
            a decisive contribution. Let's connect and create something
            remarkable together!
          </p>
        </section>
        <div id="imageHolder">
          <img src={require("./portraits/mainpic.png")} />
        </div>
      </div>
    </div>
  );
};

export default About;
