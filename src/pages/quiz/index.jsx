import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Styles from './css/quiz'
import Link from 'next/link'
const Quiz = () => {
  return (
    <>
  <Header />

  <Styles> 
    <section className="categories">
        <div className="container">
          <h2 className="row-title">
          Take the Majors Quiz
          </h2>
          <p className="text-center font-20"> What degree program is right for you? </p>
            <div className="row py-4">
                <div className="col-md-3">
                  <div className="cards">
                      <div className="image_card">
                        <img className="img-responsive" src="assets/images/biotech.png" />
                      </div>
                      <div className="text_card">
                        <h4> Applied Sciences {"&"} Biotech </h4>
                        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        <Link className="quiz-btn" href="/quiz/cat1" > Start Quiz </Link>
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cards">
                      <div className="image_card">
                        <img className="img-responsive" src="assets/images/science.png" />
                      </div>
                      <div className="text_card">
                        <h4> Legal Sciences </h4>
                        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        <Link className="quiz-btn" href="/quiz/cat1" > Start Quiz </Link>
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cards">
                      <div className="image_card">
                        <img className="img-responsive" src="assets/images/pill.png" />
                      </div>
                      <div className="text_card">
                        <h4> Pharmaceutical Sciences </h4>
                        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        <Link className="quiz-btn" href="/quiz/cat1" > Start Quiz </Link>
                      </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="cards">
                      <div className="image_card">
                        <img className="img-responsive" src="assets/images/interactive.png" />
                      </div>
                      <div className="text_card">
                        <h4> Media {"&"} Communications </h4>
                        <p> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                        <Link className="quiz-btn" href="/quiz/cat1" > Start Quiz </Link>
                      </div>
                  </div>
                </div>
            </div>

        </div>
    </section>


  </Styles>

  <Footer />
    </>
  )
}

export default Quiz