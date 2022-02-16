import {
    HeroContainer,
    HeroContent,
    HeroContentText,
    HeroTitle,
    HeroTitleText,
    HeroSubTitle,
    HeroText,
    HeroBtn,

} from './styles';


const Home = () => {
    return( <div>
    <HeroContainer>
        
        <HeroContent>
            <HeroContentText>
                 <HeroTitle>
                     <HeroTitleText>Welcome User</HeroTitleText>
                 </HeroTitle>
                 <HeroSubTitle>To view the website page please click the menu</HeroSubTitle>
            </HeroContentText>
        </HeroContent>
    </HeroContainer>
 </div>
    )
}
export default Home;