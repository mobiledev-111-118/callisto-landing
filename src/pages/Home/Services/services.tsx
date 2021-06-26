import Row, { RowEnd, RowCenter, } from 'components/Row';
import Spacer from 'components/Spacer';
import Title from 'components/Title';
import { Assets } from 'constants/images';
import { Theme } from 'constants/theme';
import styled from 'styled-components';

const Services = () => {
    const total = "59,654,486";
    const transactions = "443,954";
    const frozens = "1,731,548,226";
    const hashrates = "105";
    return (
        <Container>
            <TitleCon>
                <Title text="Callisto Network Metrics"></Title>
            </TitleCon>
            <MetricsCon>
                <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Row pl="0px" pr="0px">
                            <Img src={Assets.totalWallet} />
                            <RightCon>
                                <Label>Total Wallets</Label>
                                <NumberLabel>{total}</NumberLabel>
                            </RightCon>
                        </Row>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <Row pl="0px" pr="0px">
                            <Img src={Assets.monthT} />
                            <RightCon>
                                <Label>Monthly Transactions</Label>
                                <NumberLabel>{`${transactions} txs`}</NumberLabel>
                            </RightCon>
                        </Row>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <RowEnd pl="0px" pr="0px">
                            <Img src={Assets.frozen} />
                            <RightCon>
                                <Label>Frozen Coins</Label>
                                <NumberLabel>{`${frozens} CLO`}</NumberLabel>
                            </RightCon>
                        </RowEnd>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <RowEnd pl="0px" pr="0px">
                            <Img src={Assets.hashrate} />
                            <RightCon>
                                <Label>Network Hashrate</Label>
                                <NumberLabel>{`${hashrates} GH/s`}</NumberLabel>
                            </RightCon>
                        </RowEnd>
                    </div>
                </div>
            </MetricsCon>
            <BottomCon>
                <FixedImg src={Assets.card}/>
                <SubCon>
                    <LineImg src={Assets.line}/>
                    <LineMarkImg src={Assets.linemark}/>
                    <Dots>
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                        <Circle />
                    </Dots>
                    <SpaceRow2>
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <DisableDiv></DisableDiv>
                            </div>
                            
                            <div className="col-lg-6 col-md-6">
                                <QuadDiv>
                                    <div></div>
                                    <div>
                                        <SubTitle>Security</SubTitle>
                                        <SubTitle2>First</SubTitle2>
                                    </div>
                                    <LineDiv></LineDiv>
                                </QuadDiv>
                            </div>
                        </div>
                    </SpaceRow2>
                    <Spacer height="50px"/>
                    <SpaceRow2>
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <QuadDiv>
                                    <div></div>
                                    <RowItem>
                                        <NumberCon>01</NumberCon>
                                        <TextCon>
                                            <SubTitle3>An Unstoppable Platform</SubTitle3>
                                            <Spacer height="10px" />
                                            <Text>
                                                Callisto Network has never been 51% attacked or hacked, making the Dapps running on it the safest in the blockchain ecosystem.
                                            </Text>
                                        </TextCon>
                                    </RowItem>
                                    <div></div>
                                </QuadDiv>
                            </div>
                            
                            <div className="col-lg-6">
                                <QuadDiv>
                                    <div></div>
                                    <RowItem>
                                        <NumberCon>02</NumberCon>
                                        <TextCon>
                                            <SubTitle3>The Leading Security Experts</SubTitle3>
                                            <Spacer height="10px" />
                                            <Text>
                                                Our experts have made many contributions to improve, Ethereum, Ethereum Classic, EOS, and have audited more than 350 smart contracts.
                                            </Text>
                                        </TextCon>
                                    </RowItem>
                                    <div></div>
                                </QuadDiv>
                            </div>
                        </div>
                    </SpaceRow2>
                </SubCon>
            </BottomCon>
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
const TitleCon = styled.div`
    width: 100%;
    padding: 0 8%;
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;
const MetricsCon = styled.div`
    padding: 50px 8%;
    @media screen and (max-width: 768px) {
        padding: 30px 20px;
    }
`;
const RightCon = styled.div`
    margin-left: 20px;
`;
const Img = styled.img`
    @media screen and (max-width: 1200px) {
        width: 50px;
    }
`;
const SpaceRow2 = styled.div`
    width: 100%;
    height: 100%;
    padding: 0px;
    justify-content: space-between;
`
const FixedImg = styled.img`
    position: absolute;
    left: 8%;
    height: 300px;
    z-index: 1;
    @media screen and (max-width: 1300px) {
        height: 250px;
    }
    @media screen and (max-width: 1100px) {
        height: 200px;
    }
    @media screen and (max-width: 768px) {
        // left: 20px;
        margin-left: auto;
        margin-right: auto;
        height: 250px;
    }
    @media screen and (max-width: 700px) {
        height: 200px;
    }
    @media screen and (max-width: 420px) {
        height: 150px;
    }
`;
const Label = styled.p`
    color: ${Theme.colors.secondary};
    font-size: 18px;
    font-family: ${Theme.fonts.title};
    line-height: 24px;
    @media screen and (max-width: 1200px) {
        font-size: 16px;
    }
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`;
const NumberLabel = styled.p`
    color: ${Theme.colors.secondary};
    font-size: 24px;
    font-family: ${Theme.fonts.textBold};
    line-height: 30px;
    @media screen and (max-width: 1200px) {
        font-size: 18px;
    }
    @media screen and (max-width: 900px) {
        font-size: 14px;
    }
`;
const BottomCon = styled.div`
    position: relative;
`;
const SubCon = styled.div`
    position: relative;
    top: 100px;
    // height: 500px;
    background-color: ${Theme.colors.secondary};
    border-top: 8px;
    border-bottom: 8px;
    border-style: solid;
    border-color: #1E587D;
    padding: 0 8%;
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
    @media screen and (max-width: 420px) {
        top: 50px;
    }
`;
const LineImg = styled.img`
    position: absolute;
    left: 2.5%;
    bottom: 50px;
    z-index: 1;
    @media screen and (max-width: 998px) {
        display: none;
    }
`;
const LineMarkImg = styled.img`
    position: absolute;
    right: 10px;
    bottom: 0px;
    height: 300px;
    z-index: 1;
    @media screen and (max-width: 1180px){
        height: 250px;
    }
    @media screen and (max-width: 1112px){
        height: 150px;
    }
    @media screen and (max-width: 998px) {
        display: none;
    }
`;
const QuadDiv = styled.div`
    height: 192px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    // background-color: red;
`;

const SubTitle = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 40px;
    color: ${Theme.colors.white};
`;
const SubTitle2 = styled.div`
    font-family: ${Theme.fonts.textBold};
    font-size: 40px;
    color: ${Theme.colors.white};
`;

const LineDiv = styled.div`
    height: 2px;
    width: 60%;
    border-radius: 4px;
    background-color: ${Theme.colors.white};
`;

const RowItem = styled.div`
    display: flex;
    align-items: center;
`;
const NumberCon = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    background-color: ${Theme.colors.white};
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    font-family: ${Theme.fonts.textBold};
    font-size: 18px;
    color: ${Theme.colors.secondary};
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2), 0 5px 10px 0 rgba(0, 0, 0, 0.2);
`;
const TextCon = styled.div`
    width: 80%;
    margin-left: 15px;
`;
const SubTitle3 = styled.p`
    font-family: ${Theme.fonts.textBold};
    font-size: 20px;
    color: ${Theme.colors.white};
`;
const Text = styled.p`
    font-family: ${Theme.fonts.title};
    font-size: 16px;
    line-height: 20px;
    color: ${Theme.colors.white};
`;
const Dots = styled.div`
    position: absolute;
    display: flex;
    right: 100px;
    top: 80px;
    @media screen and (max-width: 700px) {
        top: 100px;
        right 20px;
    }
`;
const Circle = styled.div`
    width: 8px;
    height: 8px;
    margin: 5px;
    border: 2px solid #FFF;
    border-radius: 4px;
`;
const DisableDiv = styled.div`
    @media screen and (max-width: 768px) {
        height: 120px;
    }
    @media screen and (max-width: 700px) {
        height: 100px;
    }
`;

export default Services;
