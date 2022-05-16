import './project.css'
const Project = ({ name }) => {
  switch (name) {
    case "realm":
      return (
        <div class="projectTile">
          <h2>Realm Tunes</h2>
          <img src={require('../projectImages/RealmTunes.png')} />
          <div class="tagholder"></div>
          <div class="description"><p>Realm Tunes is a Discord application created with the Discord.py API. This bot comes with a bundle of commands, such as the ability to searchfor and play music from Youtube in a voice channel. This bot is hosted 24/7 and is currently used as the music bot on 4 servers, with the largest having over 120 active users.  </p></div>
        </div>
      );
    case "sort":
      return (
        <div class="projectTile">
          <h2>Sorting Algorithm Visualizer</h2>
          <img src={require('../projectImages/Sorting.png')} />
          <div class="description"><p>Ever since hearing about sorting algorithms, I was curious about what they actually looked like. I created this visualizer tool to allow me to do so, and solidify my knowledge in the process. 6 of the most common and popular sorts are visualized, each on arrays of varying sizes and speeds. The user can also choose the pivot choice for quick sort. Array operations are color coded and labelled in the legend to allow the user to fully understand what they are seeing. </p></div>
        </div>
      );
    case "syde":
      return (
        <div class="projectTile">
          <h2>SYDE 2026 Class Profile</h2>
          <img src={require('../projectImages/SYDE.png')} />
          <div class="description"><p>Following University of Waterloo tradition, myself and 18 other students from the Systems Design Engineering cohort working on data science, design and web dev created 2026 SYDE class profile! As a lead member of the software team, I created the Co-op, Academics, Demographics, High School, and Lifestyle pages, along with the footer and navigation.  </p></div>
        </div>
      );
    case "dino":
      return (
        <div class="projectTile">
          <h2>Dinosaur Game</h2>
          <img src={require('../projectImages/Dino.png')} />
          <div class="description"><p>A clone of Google's well known "Dinosaur Game". This game has you trying to reach the end of the stage while you avoid cacti coming at you at different speeds! The game includes a score and timer, parabolic jumping, aswell as procedurally generated clouds. It works and plays entirely in the terminal! </p></div>
        </div>
      );
    default:
      break;
  }
}

export default Project;