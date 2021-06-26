import Row, { RowEnd, RowCenter, SpaceRow2 } from 'components/Row';
import Spacer from 'components/Spacer';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';
import StyledText from 'components/StyledText';

const Discover = () => {
    return (
        <Container>
            <SubCon>
                <Dots>
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                    <Circle />
                </Dots>
                <LineImg src={Assets.back5}/>
                
                <RightPane>
                    <SubTitle>
                        Discover Callisto Network
                    </SubTitle>
                    <Line />
                    <div>
                        <Text>
                            Callisto Netowork started as a self-sustained and self-funded blockchain ecosystem not financed by pre-mined coins or an ICO.
                        </Text>
                        <Text>
                            Since its launch by the developers of Ethereum Commonwealth (Ethereum Classic). Callisto Network focused its attention on the weakness of the cryptocurrency space, namely the security.
                        </Text>
                    </div>
                    <GetButton href={"#"} target="_blank">
                        <StyledText color={Theme.colors.secondary} fontweight={"700"} fontsize={"22px"}>{`Get Started`}</StyledText>
                    </GetButton>
                </RightPane>
            </SubCon>
            <Spacer height="150px" />
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    margin: 0;
    @media screen and (max-width: 768px) {
        padding: 0px 5px;
    }
`;
const SubCon = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: ${Theme.colors.secondary};
    border-top: 8px;
    border-bottom: 8px;
    border-style: solid;
    border-color: #1E587D;
    padding: 100px 8% 100px 4%;
    @media screen and (max-width: 1050px) {
        padding: 50px 8% 50px 4%;
    }
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 645px) {
        flex-direction: column;
    }

`;
const LineImg = styled.img`
    margin-top: auto;
    margin-bottom: auto;
    @media screen and (max-width: 1050px) {
        height: 300px;
    }
    @media screen and (max-width: 645px) {
        height: 300px;
        width: 300px;
        margin: 20px;
        margin-top: 60px;
        align-self: center;
    }
`;
const Dots = styled.div`
    position: absolute;
    display: flex;
    right: 8%;
    bottom: 100px;
    @media (max-width: 768px) {
        right: 20px;
    }
    @media screen and (max-width: 645px) {
        bottom: 20px;
    }
`;
const Circle = styled.div`
    width: 8px;
    height: 8px;
    margin: 5px;
    border: 2px solid #FFF;
    border-radius: 4px;
`;
const RightPane = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: space-between;
    padding: 80px 0;
    @media screen and (max-width: 1050px) {
        padding: 50px 0;
    }
    @media screen and (max-width: 645px) {
        width: 100%;
    }
`;
const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 40px;
    color: ${Theme.colors.white};
`;
const Line = styled.div`
    height: 2px;
    background-color: #FFF;
    width: 60%;
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 20px;
    line-height: 24px;
    color: ${Theme.colors.white};
    padding-top: 20px;
`;
const GetButton = styled.a`
    background-color: ${Theme.colors.white};
    text-decoration: none;
    padding: 15px 50px;
    width: 250px;
    margin-right: 15px;
    font-size: 18px;
    text-align: center;
    border-radius: 40px;
    margin-top: 20px;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
    @media (max-width: 596px) {
        width: 100%;
    }
`;
export default Discover;
