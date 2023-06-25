
import ColumnSection from './ColumnSection';
import ShortAboutUS from './ShortAboutUS';
import Slider from './Slider';

import Building from "../../Assets/Images/ColumnImages/building-300x300.jpg"
import Automation from "../../Assets/Images/ColumnImages/automation-300x300.jpg"
import Systems from "../../Assets/Images/ColumnImages/systems-300x300.jpg"

const Home = () => {
    return (
        <div>
            <Slider />
            <ShortAboutUS />
            <div className='Row'>
                <ColumnSection image={Building} button="Our Case Studies" title="Building" words="From stadiums, laboratories and hospitals to schools, offices and museums, each environment presents a unique set of controls challenges. That’s why we customize the design and installation of the building automation systems needed to keep each facility functioning optimally." />
                <ColumnSection image={Automation} button="Our Services" title="Automation" words="By combining our experience and engineering expertise, we create automated, energy-efficient sequences of operation that minimize the strain on a facility’s resources. Ultimately, customers see a rapid return on investment and significant cost-savings over time." />
                <ColumnSection image={Systems} button="Our Products" title="Systems" words="Our commitment to innovation ensures customers benefit from the most advanced, user-friendly HVAC, lighting and security systems deployed in the market. This is underscored by trusted relationships with companies like Automated Logic, Crestron and Software House." />
            </div>
        </div>
    )
}


export default Home;