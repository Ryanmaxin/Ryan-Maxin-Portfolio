import { ReactComponent as Bootstrap } from '../../images/bootstrap.svg'
import { ReactComponent as C } from '../../images/c.svg'
import { ReactComponent as Chartjs } from '../../images/chartjs.svg'
import { ReactComponent as CMD } from '../../images/cmd.svg'
import { ReactComponent as CPP } from '../../images/cpp.svg'
import { ReactComponent as CSS } from '../../images/css.svg'
import { ReactComponent as Express } from '../../images/express.svg'
import { ReactComponent as Firebase } from '../../images/firebase.svg'
import { ReactComponent as GEE } from '../../images/gee.svg'
import { ReactComponent as Git } from '../../images/git.svg'
import { ReactComponent as HTML } from '../../images/html.svg'
import { ReactComponent as Java } from '../../images/java.svg'
import { ReactComponent as JS } from '../../images/js.svg'
import { ReactComponent as MongoDB } from '../../images/mongodb.svg'
import { ReactComponent as MUI } from '../../images/mui.svg'
import { ReactComponent as Nodejs } from '../../images/nodejs.svg'
import { ReactComponent as Python } from '../../images/python.svg'
import { ReactComponent as ReactIcon } from '../../images/react.svg'
import { ReactComponent as ReactRouter } from '../../images/reactrouter.svg'
import { ReactComponent as SASS } from '../../images/sass.svg'
import { ReactComponent as Bash } from '../../images/bash.svg'
import { ReactComponent as MATLAB } from '../../images/matlab.svg'
import { ReactComponent as TypeScript } from '../../images/typescript.svg'
import { ReactComponent as Assembly } from '../../images/assembly.svg'
import { ReactComponent as VHDL } from '../../images/vhdl.svg'
import { ReactComponent as Groovy } from '../../images/groovy.svg'
import { ReactComponent as Jenkins } from '../../images/jenkins.svg'
import { ReactComponent as Jira } from '../../images/jira.svg'
import { ReactComponent as Docker } from '../../images/docker.svg'
import { ReactComponent as JQuery } from '../../images/jquery.svg'
import { ReactComponent as Pandas } from '../../images/pandas.svg'
import { ReactComponent as MatPlotLib } from '../../images/matplotlib.svg'



import './skill.css'

const Skill = ({ type }) => {
  switch (type) {
    case 'language':
      return (
        <div className="skills">
          <div className="skill">
            <JS />
            <h4 className="skillName">Javascript</h4>
          </div>
          <div className="skill">
            <TypeScript />
            <h4 className="skillName">Typescript</h4>
          </div>
          <div className="skill">
            <HTML />
            <h4 className="skillName">HTML</h4>
          </div>
          <div className="skill">
            <CSS />
            <h4 className="skillName">CSS</h4>
          </div>
          <div className="skill">
            <Python />
            <h4 className="skillName">Python</h4>
          </div>
          <div className="skill">
            <C />
            <h4 className="skillName">C</h4>
          </div>
          <div className="skill">
            <CPP />
            <h4 className="skillName">C++</h4>
          </div>
          <div className="skill">
            <Java />
            <h4 className="skillName">Java</h4>
          </div>
          <div className="skill">
            <Assembly />
            <h4 className="skillName">Assembly</h4>
          </div>
          <div className="skill">
            <Bash />
            <h4 className="skillName">Bash</h4>
          </div>
          <div className="skill">
            <MATLAB />
            <h4 className="skillName">MATLAB</h4>
          </div>
          <div className="skill">
            <SASS />
            <h4 className="skillName">SASS</h4>
          </div>
          <div className="skill">
            <Groovy />
            <h4 className="skillName">Groovy</h4>
          </div>
          
          <div className="skill">
            <VHDL />
            <h4 className="skillName">VHDL</h4>
          </div>
        </div>
      );
    case 'framework':
      return (<div className="skills">
        <div className="skill">
          <ReactIcon />
          <h4 className="skillName">React</h4>
        </div>
        <div className="skill">
          <Express />
          <h4 className="skillName">Express</h4>
        </div>
        <div className="skill">
          <Bootstrap />
          <h4 className="skillName">Bootstrap</h4>
        </div>
        {/* <div className="skill">
          <GEE />
          <h4 className="skillName">Google Earth Engine</h4>
        </div> */}
      </div>)
    case 'library':
      return (<div className="skills">
        <div className="skill">
          <MatPlotLib />
          <h4 className="skillName">Matplotlib</h4>
        </div>
        <div className="skill">
          <Pandas />
          <h4 className="skillName">Pandas</h4>
        </div>
        <div className="skill">
          <Chartjs />
          <h4 className="skillName">Chart.js</h4>
        </div>
        <div className="skill">
          <MUI />
          <h4 className="skillName">Material UI</h4>
        </div>
      </div>)
    case 'tool':
      return (<div className="skills">
        <div className="skill">
          <ReactRouter />
          <h4 className="skillName">React Router</h4>
        </div>
        <div className="skill">
          <Nodejs />
          <h4 className="skillName">Node.js</h4>
        </div>
        <div className="skill">
          <MongoDB />
          <h4 className="skillName">MongoDB</h4>
        </div>
        <div className="skill">
          <Git />
          <h4 className="skillName">Git</h4>
        </div>
        <div className="skill">
          <Jenkins />
          <h4 className="skillName">Jenkins</h4>
        </div>
        <div className="skill">
          <JQuery />
          <h4 className="skillName">jQuery</h4>
        </div>
        <div className="skill">
          <Docker />
          <h4 className="skillName">Docker</h4>
        </div>
        <div className="skill">
          <Jira />
          <h4 className="skillName">Jira</h4>
        </div>
        <div className="skill">
          <Firebase />
          <h4 className="skillName">Firebase</h4>
        </div>
        <div className="skill">
          <CMD />
          <h4 className="skillName">Command Line</h4>
        </div>
      </div>)
    default:
      break;
  }
}

export default Skill;
