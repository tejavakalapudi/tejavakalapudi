import React from "react";
import { Jumbotron, Row, Col, ul, li, Button, Collapse, Card, CardBody, ButtonGroup } from "reactstrap";

class VastuTab extends React.Component {

    state = {
        activeTab : "1"
    }

    renderActiveTab = ( tab ) => {

        if ( this.state.activeTab !== tab ) {

            this.setState({
                activeTab: tab
            });

        }

    }

    render(){

        return( 
            <div> 
                <Jumbotron>
                    <Col >
                        <div> 
                            <h4 className = "buyersguide_subtitle" >Vastu</h4>
                            <hr/>
                            <p className = "buyersguide_description">
                                Why the North East (Eesanya) is the sacred most in Vastu? Why the people consider South West (Nairuti ) as the worst direction? Is the Vastu merely a blind belief?
                            </p>

                            <Button size="lg" color="light" block onClick = {() => { this.renderActiveTab("1"); }} className = "buyersguide_heading">
                                Principles of Vastu:
                            </Button>{' '}
                            <Collapse isOpen={this.state.activeTab === "1"}>
                                <Card>
                                    <CardBody>
                                        <p className = "buyersguide_description">
                                            The sun is farthest to India, when it is to the Eesanya. The sun is closest, when it is to the Nairuti. That is the reason; why Vastu always dictates that the North East area of a Home be kept open and Nairuti always be blocked as the dangerous ultra violet rays enter from this direction. Vastu is not a mere superstition. It is both science and an art. The Word Vastu has its origins from Vas meaning to live. Kshetram (Space) and Kalam (Time) are the most important elements in this life science. 
                                        </p>
                                        <p className = "buyersguide_description">
                                            Ancient India had immensely benefited by this science of architecture. Their happy lives are the perfect testimony for the usefulness of the Vastu. The experience of fore fathers had proved that the planning of villages, towns, cities and capitals of ancient India was the best and gave the most health, pleasant and practical layout. The easterly axis of the plan ensured that the principle streets were purified by the rays of the sun sweeping through them all through the day. The intersection of main streets by shorter ones running from north and south provides perfect circulation of air and the maximum benefit of the cool breeze. 
                                        </p>
                                        <p className = "buyersguide_description">
                                            Vastu principles take into account the Solar Energy and Magnetic power of the earth. Cosmic Energy is also considered. Powerful sun rays affect the whole of the body, particularly the brain. If we spend considerable time in the rooms which are not guarded from this dangerous rays, our mental composure will be affected severely. 
                                        </p>
                                        <p className = "buyersguide_description">
                                            Everybody, who knows basic principles of science, is well aware of the fact that the human body is full of blood. Haemoglobin is the pigment which gives colour to the blood. Haemoglobin contains iron. The entire body is considered to be a magnet. Our head is the North and the feet are the South. It is known fact that the like poles repel each other. If we sleep by keeping the head facing north direction, blood circulation to the brain increases. During sleep, brain and the body requires less blood circulation. That is the reason why Vastu always suggest us to keep the head towards South or West while sleeping. 
                                        </p>
                                        <p className = "buyersguide_description">
                                            Like this, each and every Vastu tenet has scientific base. Vastu gives us a route map on how to create a building that vibrates with Positive Energy. The basics are orientation, auspicious entry, room locations has a lot to do with astronomy, architecture, mathematics, magnetism and physics. Vastu architecture always prefers symmetry. Every time you enter your house, your energy is in relationship to the Vastu mandala of the house at that point. 
                                        </p>
                                        <p className = "buyersguide_description">
                                            A door must be precisely oriented for the activation of positive energy. The structure and orientation of the building sets up a vibration that either nourishes or drains. If you live in the Vastu compliant building or which is against the Vastu principles it will have some effect, no matter who owns it. If you really desire to live peacefully, you must follow the Vastu as much as you can. Is it possible to follow the Vastu in crowded cities?
                                        </p>
                                        <p className = "buyersguide_description">
                                            Vastu prefers four directions of the home open. If not, at least East and North directions to be open.
                                        </p>
                                        <p className = "buyersguide_description">
                                            It is impossible to follow Vastu principles completely in cities which are crowded by the skyscrapers. Vastu advises you to keep all the four directions of your home to be kept open. At best, Vastu prefers East and North directions to be open. You can't do much, if your home is covered by huge structures from all the three directions. So we don't have much control in exteriors. The space between four walls is ours. We can adopt Vastu principles as much as we can for interiors. 
                                        </p>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button size="lg" color="light" block onClick = {() => { this.renderActiveTab("2"); }} className = "buyersguide_heading">
                                Orientation of the House:
                            </Button>{' '}
                            <Collapse isOpen={this.state.activeTab === "2"}>
                                <Card>
                                    <CardBody>
                                        <p className = "buyersguide_description">
                                            In Hyderabad real estate market, North and the East are the most preferred orientations. East and North face flats will have a premium, when compared to remaining two directions. Does Vastu prefer these two orientations only? Are the West and South face flats unfavourable? Vastu never said so. Vastu tenets say that the house needs to be in a particular alignment with north, south, east, and west. So, nothing wrong in choosing West or South facing flats. Only stipulation is that it should not be more than 10 degrees off this orientation. 
                                        </p>

                                        <h5 className = "buyersguide_heading" >West is also best:</h5>
                                        <p className = "buyersguide_description">
                                            The idea behind this is that the structure is to resonate with earth and cosmic energies. One of the pre conditions for this resonance is alignment with East, West, North and South. Vastu gives equal importance to four directions. Each direction has its own importance.
                                        </p>

                                        <p>
                                            <ul className = "buyersguide_description">
                                                <li >East is for physical comfort and mental peace</li>
                                                <li >South is for salvation, redemption, freedom from earthly worries & moksha</li>
                                                <li >West is for material prosperity</li>
                                                <li >North is for general prosperity</li>
                                            </ul>
                                        </p>

                                        <p className = "buyersguide_description">
                                            So, if you are looking for material prosperity you can choose West Facing Flat and Home without any hesitation. You may get the flat at competitive price also. 
                                        </p>
                                    </CardBody>
                                </Card>
                            </Collapse>

                            <Button size="lg" color="light" block onClick = {() => { this.renderActiveTab("3"); }} className = "buyersguide_heading">
                                Orientation according to Zodiac Signs:
                            </Button>{' '}
                            <Collapse isOpen={this.state.activeTab === "3"}>
                                <Card>
                                    <CardBody>
                                        <p>
                                            There is a sub sect in Vastu called Jyotir Vastu, which means, Vastu based on Astrology. Jyotir Vastu prescribes different oriented houses for different zodiac signs. According to this, the following are advised:
                                        </p>
                                        <p>
                                            <ul className = "buyersguide_description">
                                                <li >Vrischika, Meena (Pisces), karkataka: : East Facing</li>
                                                <li >Midhuna (Gemini), Makara (Capricorn) Kanya (Virgo): South Facing</li>
                                                <li >Tula (Libra) Vrishabha (Taurus), Kumbha (Aquarius): West Facing</li>
                                                <li >Mesha (Aries) Simha (Leo), Dhanu (Sagittarius): North Facing4</li>
                                            </ul>
                                        </p>

                                        <p>
                                            Jyotir Vastu also prescribes favourable orientations based on the first Telugu (or Sanskrit) letter of the owner. All the letters are divided in to eight Vargus. These are called Ashtha Vargus 
                                        </p>
                                        <p>
                                            <ul className = "buyersguide_description">
                                                <li >A Vargu - a, aa, e, ee ru.</li>
                                                <li >KA Vargu - ka, kha, ga, gha, jna</li>
                                                <li >CHA Vargu - cha, chha, ja, jha</li>
                                                <li >TA Vargu - ta, tha, da, dha, na</li>
                                                <li >THA Vargu - tha, Thha, dha, dhha, na</li>
                                                <li >PA Vargu - pa, pha, ba, bha, ma</li>
                                                <li >YA Vargu - ya, ra, la, va</li>
                                                <li >Sa Vargu - sa, sha, sam ha, ksha</li>
                                            </ul>
                                        </p>

                                        <p>
                                            The following are the favorable orientations for the each Vargu.
                                        </p>
                                        <p>
                                            <ul className = "buyersguide_description">
                                                <li >A Vargu - East, West and North Facing</li>
                                                <li >KA Vargu - North, East Facing</li>
                                                <li >CHA Vargu - South, West, East Facing</li>
                                                <li >TA Vargu - South, East, West Facing</li>
                                                <li >THA Vargu - South, West Facing</li>
                                                <li >PA Vargu - South, West Facing</li>
                                                <li >YA Vargu - North, West Facing</li>
                                                <li >SHA Vargu - North, West Facing</li>
                                            </ul>
                                        </p>
                                    </CardBody>
                                </Card>
                            </Collapse>

                        </div>
                    </Col>
                </Jumbotron>
            </div> 
        );
    }
}

export default VastuTab;