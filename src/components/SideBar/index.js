import {Component} from 'react'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineHome} from 'react-icons/ai'
import {HiOutlineFire, HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'
import ThemeContext from '../../context/ThemeContext'
import {
  SideBarContainer,
  OptionItem,
  OptionsContainer,
  ContactUsContainer,
  ContactUsHeading,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactUsDescription,
} from './styledComponents'
import './index.css'

class SideBar extends Component {
  render() {
    const {activeRoute} = this.props
    let homeColor
    let trendingColor
    let gameingColor
    let savedColor
    let homeBgColor
    let trendingBgColor
    let gamingBgColor
    let savedBgColor

    console.log(savedColor)
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const textClassName = isDarkTheme ? 'dark' : 'light'
          if (activeRoute === 0) {
            homeColor = {color: '#ff0000'}
            if (isDarkTheme) {
              homeBgColor = 'darkBg'
            } else {
              homeBgColor = 'lightBg'
            }
          }
          if (activeRoute === 1) {
            trendingColor = {color: '#ff0000'}
            if (isDarkTheme) {
              trendingBgColor = 'darkBg'
            } else {
              trendingBgColor = 'lightBg'
            }
          }
          if (activeRoute === 2) {
            gameingColor = {color: '#ff0000'}
            if (isDarkTheme) {
              gamingBgColor = 'darkBg'
            } else {
              gamingBgColor = 'lightBg'
            }
          }
          if (activeRoute === 3) {
            savedColor = {color: '#ff0000'}
            if (isDarkTheme) {
              savedBgColor = 'darkBg'
            } else {
              savedBgColor = 'lightBg'
            }
          }
          return (
            <SideBarContainer darkMode={isDarkTheme}>
              <OptionsContainer>
                <Link
                  to="/"
                  className={`link-item ${textClassName} ${homeBgColor}`}
                >
                  <OptionItem>
                    {isDarkTheme ? (
                      <AiFillHome className="icon" style={homeColor} />
                    ) : (
                      <AiOutlineHome className="icon" style={homeColor} />
                    )}
                    Home
                  </OptionItem>
                </Link>

                <Link
                  to="/trending"
                  className={`link-item ${textClassName}  ${trendingBgColor}`}
                >
                  <OptionItem>
                    {isDarkTheme ? (
                      <HiFire className="icon" style={trendingColor} />
                    ) : (
                      <HiOutlineFire className="icon" style={trendingColor} />
                    )}
                    Trending
                  </OptionItem>
                </Link>

                <Link
                  to="/gaming"
                  className={`link-item ${textClassName}  ${gamingBgColor}`}
                >
                  <OptionItem>
                    <SiYoutubegaming className="icon" style={gameingColor} />
                    Gaming
                  </OptionItem>
                </Link>

                <Link
                  to="/saved-videos"
                  className={`link-item ${textClassName}  ${savedBgColor}`}
                >
                  <OptionItem>
                    <BiListPlus className="icon" style={savedColor} />
                    Saved Videos
                  </OptionItem>
                </Link>
              </OptionsContainer>
              <ContactUsContainer darkMode={isDarkTheme}>
                <ContactUsHeading>CONTACT US</ContactUsHeading>
                <SocialMediaContainer>
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialMediaIcon
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linked in logo"
                  />
                </SocialMediaContainer>
                <ContactUsDescription>
                  Enjoy! Now to see your channels and recommendations!
                </ContactUsDescription>
              </ContactUsContainer>
            </SideBarContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
