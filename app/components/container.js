import { style, mediaQueries } from '../constants'

const Container = props => (
  <div style={props.style}>
    <style jsx>{`
    
    div {
      padding: 0 15px;
      margin: 0 auto;
    }
    
    @media (min-width: ${mediaQueries.S}) {
      div {
        width: 750px;
      }
    }
    
    @media (min-width: ${mediaQueries.L}) {
      div {
        width: 992px;
      }
    }
    
    @media (min-width: ${mediaQueries.XL}) {
      div {
        width: 1140px;
      }
    }

    
  `}</style>
    {props.children}
  </div>
)

const Style = () => (
  <style jsx>{`
    
    @media (min-width: ${mediaQueries.XL}) {
      div {
        width: 1170px;
        background-color: red;
      }
    }
    
    @media (min-width: ${mediaQueries.L}) {
      div {
        width: 970px;
      }
    }
    
    @media (min-width: ${mediaQueries.S}) {
      div {
        width: 750px;
      }
    }
  `}</style>
)

module.exports = Container
