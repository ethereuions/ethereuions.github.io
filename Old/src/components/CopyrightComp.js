import React from 'react';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import TabIcon from 'material-ui-icons/Tab';
class CopyrightComp extends React.Component{
    render(){
        return(
                <Card>
                    <CardContent>
                        <ul class="u-line">
                            <li class="Footer-item Footer-copyright copyright">© 2017 Twitter</li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">About</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Help Center</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Terms</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Privacy policy</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Cookies</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Ads info</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Brand</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Blog</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Status</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Apps</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Jobs</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Marketing</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Businesses</a></li>
                            <li class="Footer-item"><a class="Footer-link" href="#" rel="noopener">Developers</a></li>
                        </ul>
                    </CardContent>
                    <CardActions>
                        <hr/>
                        <TabIcon/>  
                        <a href="#" rel="noopener"><h6>Advertise with Hasura</h6></a>
                    </CardActions>
                </Card>
        );
    }
}       

export default CopyrightComp;