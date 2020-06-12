
import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu } from 'react-mdl';

class Contact extends Component {
   constructor(props) {
       super(props);
       this.state = { activeTab: 0 };
   }

   toggleCategories() {
    if(this.state.activeTab === 0) {
        return(
            <Grid>
                <Cell col={12}>
                {/* Christian Sanchez*/}
                <Card shadow={5} style={{width: '580px', minWidth: '580', margin: 'auto', borderRadius: '50px'}}>
                    <CardTitle style={{color: '#000000', height: '220px', background: 'url(https://avatars2.githubusercontent.com/u/58318559?s=400&u=63867c02cab88408b90435182d87d4569f8095f2&v=4)center /auto'}}> 
                
                    </CardTitle>

                    <CardText> 
                    <h3 className="DevName">Christian Sanchez</h3>
                    I am a full stack web developer with experience in Sales and Health Care. As a person with a natural creativity, I have always loved exhibiting my skills in the form of music and art as a hobbie. I've realized that creativity and problem solving are the core elements of coding. From front end to back end, I have learned multiple of skills that lead to creating beautiful and functional applications. My journey has taken me from graduating East Carolina University in Communications, to creating proficent and dynamic applications. The road will only become more intriguing as the oppurtunites come to light and my skills are further exhibited.
                    </CardText>

                    <CardActions border>
                        <Button type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/cas81695';
                            }}
                            colored> Github
                        </Button>

                        <Button type="button" onClick={(e) => {
                        e.preventDefault();
                        window.location.href='https://www.linkedin.com/in/christian-sanchez-181467103/';
                        }}
                        colored> LinkedIn
                        </Button>
                    </CardActions>

                    <CardMenu style={{color: '#000000'}}>
                </CardMenu>
            </Card>
        </Cell>
    </Grid>
                
        )
    } else if(this.state.activeTab === 1) {
        return(
            <Grid>
                <Cell col={12}>
                {/*Jasmin Rowdy*/}
                <Card shadow={5} style={{width: '580px', minWidth: '580px', margin: 'auto', borderRadius: '50px'}}>
                    <CardTitle style={{color: '##000000', height: '230px', background: 'url(https://pbs.twimg.com/profile_images/1199098398206377984/oNR0wAjj_400x400.jpg)center /auto'}}> 
                    </CardTitle>

                        <CardText> 
                            <h3 className="DevName">Jasmin Rowdy</h3>
                            I am a North Carolina State University alumni, eighth year educator and a full stack web developer.  I am also a Google for Education Certified Trainer and I train other educators how to use Google tools in their classroom by leading local and state-level workshops. I love music, photography and painting all with strong attention to detail so, naturally, front end development is my first love!  I hope to design, clean, unique and efficient sites/applications.
                        </CardText>

                        <CardActions border>
                            <Button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://github.com/jrowdy/';
                                }}
                                colored> Github
                            </Button>

                            <Button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://www.linkedin.com/in/jrowdy-2020613/';
                                }}
                                colored> LinkedIn
                            </Button>
                        </CardActions>

                            <CardMenu style={{color: '#000000'}}>
                            </CardMenu>
                </Card>
            </Cell>
        </Grid>
        )
    } else if(this.state.activeTab === 2) {
        return( 
        <Grid>
            <Cell col={12}>
                {/* Omar Ibrahim*/}
                <Card shadow={5} style={{width: '580px', minWidth: '580px', margin: 'auto', borderRadius: '50px'}}>
                        <CardTitle style={{color: '##000000', height: '230px', background: 'url(https://avatars3.githubusercontent.com/u/57788908?s=400&u=b055c58257b8c0c8ba11ee496a705ae4bc29a26b&v=4)center /contain'}}> 
                    </CardTitle>

                    <CardText>  
                        <h3 className="DevName">Omar Ibrahim</h3> 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </CardText>

                    <CardActions border>
                        <Button type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='https://github.com/abdallah723';
                            }}
                            colored> Github
                        </Button>
                        <Button type="button" onClick={(e) => {
                            e.preventDefault();
                            window.location.href='#';
                            }}
                            colored> LinkedIn
                        </Button>

                
                    </CardActions>

                    <CardMenu style={{color: '#000000'}}>
                    </CardMenu>
                </Card>
            </Cell>
        </Grid>
            
        )
   } else if(this.state.activeTab === 3) {
    return(
        <Grid>
            <Cell col={12}>
                {/* Tyler Buck*/}
                <Card shadow={5} style={{width: '580px', minWidth: '580px', margin: 'auto', borderRadius: '50px'}}>
                    <CardTitle style={{color: '#fff', height: '230px', background: 'url(https://avatars0.githubusercontent.com/u/57814333?s=460&u=cbb62b2755a93573bf3414c3f92e10e8f1868368&v=4)center /auto'}}> 
                    </CardTitle>
                        <CardText>
                            <h3 className="DevName">Tyler Buck</h3>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </CardText>

                        <CardActions border>
                            <Button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='https://github.com/thetylerb/';
                                }}
                                colored> Github
                            </Button>

                        <Button type="button" onClick={(e) => {
                                e.preventDefault();
                                window.location.href='#';
                                }}
                                colored> LinkedIn
                        </Button>
            
                        </CardActions>

                

                        <CardMenu style={{color: '#000000'}}>
                        </CardMenu>
                </Card>
            </Cell>
        </Grid>
     )
    } else if(this.state.activeTab === 4) {
        return(
            <Grid>
                <Cell col={12} tablet={8} phone={4}>
                    {/* Nicholas Finch*/}
                        <Card shadow={5} style={{width: '580px', minWidth: '580px', margin: 'auto', borderRadius: '50px'}}>
                            <CardTitle style={{color: '##000000', height: '230px', background: 'url(https://avatars2.githubusercontent.com/u/57764795?s=460&u=4be80bacf42ba1b0d47a387ebdf1df1081456dcd&v=4)center /auto'}}> 
                            </CardTitle>

                            <CardText> 
                                <h3 className="DevName">Nicholas Finch</h3>
                                I had originally gotten my Associate's degree in IT from a local Community College. After little success in the job hunt, I decided to further my education with the UNC coding bootcamp. Currently, I am a server at Red Robin and have been for 2 years. Although I think writing code is a good challenge my dream job would be in music production. I love playing the piano and I am very interested in learning more instruments. I am a deeply motivated programmer, I love learning new things and continuing to challenge myself.
                            </CardText>

                            <CardActions border>
                                <Button type="button" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://github.com/Finch23';
                                    }}
                                    colored> Github
                                </Button>

                                <Button type="button" onClick={(e) => {
                                    e.preventDefault();
                                    window.location.href='https://www.linkedin.com/in/nicholas-finch-506447185/';
                                    }}
                                    colored> LinkedIn
                                </Button>
                            </CardActions>

                        <CardMenu style={{color: '#000000'}}>
                        </CardMenu>
                    </Card> 
                </Cell>
            </Grid>
        )
}
   }
   
    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple > 
                    <Tab>Christian Sanchez</Tab>
                    <Tab>Jasmin Rowdy</Tab>
                    <Tab>Omar Ibrahim</Tab>
                    <Tab>Tyler Buck</Tab>
                    <Tab>Nicholas Finch</Tab>
                    
                </Tabs>

                
                    <Grid className="contacts-grid">
                        <Cell col={12}>
                            <div className="content"> {this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                   
    
            </div>
        )
    }
}

export default Contact;