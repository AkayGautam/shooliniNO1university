import styled from 'styled-components'
import { colors } from '../../../components/common/elements/elements'

const Styless = styled.div`

.App {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    font-size: 20px;
  }
  #year-options {
    display: flex;
    gap: 10px;
    margin: 10px;
  }
  .car-image {
    width: 200px;
    height: 180px;
  }
  #car-list {
    display: grid;
    gap: 20px;
    min-height: 480px;
    grid-template-columns: repeat(3, 1fr);
  }
  .car-item {
    display: flex;
    height: 200px;
    flex-direction: column;
    background-color: #fafafa;
    border: 1px solid black;
    padding: 10px;
    gap: 5px;
  }
  .filter-option,
  .active-option {
    padding: 10px 20px;
    min-width: 50px;
    border-radius: 2rem;
  }
  .brand-filter {
    display: flex;
    margin: 15px;
  }
  #brand-input {
    width: 80px;
    margin: 0 10px;
    height: 30px;
  }
  .filter-option:hover,
  .active-option {
    background-color: #48b393;
    color: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    transition: all 0.1s;
  }
  



`

export default Styless

