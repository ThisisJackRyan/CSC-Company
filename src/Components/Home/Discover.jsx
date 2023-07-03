
import Architecture from '../../Assets/Images/Discover/Architecture-EngeneeringFirms.png'
import EnergyServiceCompanies from '../../Assets/Images/Discover/EnergyServiceCompanies.png'
import ContractingPartners from '../../Assets/Images/Discover/ContractingPartners.png'
import FacilityManagers from '../../Assets/Images/Discover/FacilityManagers-Owners.png'

const Discover = () => {
    return (
        <div>
            <div>
                <div className='DiscoverTitle'>Discover the Value of Working with CSC</div>
                <div className='DiscoverLine'></div>
                <div className='DiscoverWords'>At Control Service Company, delivering cost-effective, efficient building controls and automation systems tailored for any environment is what we do. Find out how you can benefit from incorporating our products and services into your next project.</div>
            </div>
            <div className='AllDiscoverIcons'>
                <div className="DiscoverIcons">
                    <div>
                        <img src={Architecture} alt="" />
                    </div>
                    <div className='DiscoverIconsWords' >Architecture/Engineering Firms</div>
                </div>
                <div className="DiscoverIcons">
                    <div>
                        <img src={EnergyServiceCompanies} alt="" />
                    </div>
                    <div className='DiscoverIconsWords' >Energy Service Companies</div>
                </div>
                <div className="DiscoverIcons">
                    <div>
                        <img src={ContractingPartners} alt="" />
                    </div>
                    <div className='DiscoverIconsWords' >Contracting Partners</div>
                </div>
                <div className="DiscoverIcons">
                    <div>
                        <img src={FacilityManagers} alt="" />
                    </div>
                    <div className='DiscoverIconsWords' >Facility Managers/Owners</div>
                </div>
            </div>
        </div>
    );
}

export default Discover;