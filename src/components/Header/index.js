import React from 'react'
import Video from '../../assets/video.mp4';
import { HeaderWrapper, HeaderContent, HeaderTitle, HeaderSubContent,HeaderSubtitlte,
    HeaderBg,
    HeaderVideo, VideoOverlay
} from './HeaderElements';
import Button from '../Button/Button';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderBg>
                <HeaderVideo autoPlay loop muted src={Video} type='video/mp4' />
            </HeaderBg>
            <VideoOverlay></VideoOverlay>
            <HeaderContent>
                <HeaderTitle>Skynet</HeaderTitle>
                <HeaderSubtitlte>Advanced Technology</HeaderSubtitlte>
                <HeaderSubContent>
                    Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                    Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus 
                    maiores alias consequatur aut perferendis doloribus asperiores repellat."
                </HeaderSubContent>
                <Button primary>Get Started</Button>
            </HeaderContent>
        </HeaderWrapper>
    )
}

export default Header;
