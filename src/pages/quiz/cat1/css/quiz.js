import styled from 'styled-components'

const Styles = styled.div`
  

.quiz-container {
    max-width: 500px;
    min-width: 250px;
    background: #f6f6f6;
    border-radius: 4px;
    padding: 20px 20px;
    margin: 50px auto;
    box-shadow: 0px 6px 20px 5px rgba(0,0,0,0.1);
}
.quiz-container .active-question-no {
  font-size: 32px;
  font-weight: 500;
  color: #800080;
}

.quiz-container .total-question {
  font-size: 16px;
  font-weight: 500;
  color: #e0dee3;
}

.quiz-container h2 {
  font-size: 20px;
  font-weight: 500;
  margin: 0;
}

.quiz-container ul {
  margin-top: 20px;
  margin-left: -40px;
}
.form-control {
    border-radius: 0;
    margin-bottom: 10px;
}
.quiz-container ul input {
  text-decoration: none;
  list-style: none;
  color: #2d264b;
  font-size: 16px;
  background: #ffffff;
  border: 1px solid #eaeaea;
  border-radius:4px;
  padding: 11px;
  margin-top: 15px;
  cursor: pointer;
  width: 100%;
}

.quiz-container ul .selected-answer {
  background: #feeeee;
  border: 1px solid #800080;
}

.quiz-container button {
  background: linear-gradient(90.04deg,#e41a1a 0.03%,#f0546f 99.96%);
  border-radius: 5px;
  font-size: 16px;
  color: #ffffff;
  padding: 10px 37px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 15px;
}

.quiz-container button:disabled {
  background: #e7e8e9;
  color: #9fa3a9;
  cursor: not-allowed;
}

.flex-right {
  display: flex;
  justify-content: flex-end;
}

.result h3 {
  font-size: 24px;
  letter-spacing: 1.4px;
  text-align: center;
}

.result p {
  font-size: 16px;
  font-weight: 500;
}

.result p span {
  color: #800080;
  font-size: 22px;
}



`

export default Styles
