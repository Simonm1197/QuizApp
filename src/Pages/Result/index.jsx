import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { QuizContext } from '../../context/quizContext'



function ResultPage() {
  const { ans, setPage, setAns } = useContext(QuizContext)
  const nav = useNavigate()


  return (
    <div className='flex flex-col items-center '>
      <div >
        <svg width="147" height="155" viewBox="0 0 147 155" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M121.743 68.3608H24.938V152.049H121.743V68.3608Z" fill="url(#paint0_linear_14_516)" />
          <path d="M119.689 70.4233V149.986H27.0005V70.4233H119.689ZM123.814 66.2983H22.8755V154.111H123.814V66.2983Z" fill="#F0EBE6" />
          <path d="M27.0005 110.205H99.6005" stroke="#1A1F71" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M105.178 3L3 47.8954L13.6066 72.035L115.784 27.1396L105.178 3Z" fill="url(#paint1_linear_14_516)" stroke="#F0EBE6" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M119.417 130.03C130.366 130.03 139.242 121.154 139.242 110.205C139.242 99.2559 130.366 90.3801 119.417 90.3801C108.468 90.3801 99.5923 99.2559 99.5923 110.205C99.5923 121.154 108.468 130.03 119.417 130.03Z" fill="#F0EBE6" stroke="url(#paint2_linear_14_516)" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M119.417 100.239V120.171" stroke="#25D366" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M129.391 110.205H109.451" stroke="#25D366" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M53.8048 93.2263C56.2798 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 47.2461 104.785 44.7463 102.285C44.1504 101.689 43.6778 100.982 43.3553 100.203C43.0328 99.4245 42.8668 98.59 42.8668 97.7473C42.8668 96.9046 43.0328 96.0702 43.3553 95.2917C43.6778 94.5131 44.1504 93.8057 44.7463 93.2098C45.9497 92.0064 47.5819 91.3303 49.2838 91.3303C50.1265 91.3303 50.9609 91.4963 51.7395 91.8188C52.518 92.1413 53.2254 92.614 53.8213 93.2098L53.8048 93.2263Z" stroke="#1A1F71" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M69.6448 93.2263C67.1698 95.7013 61.7248 110.205 61.7248 110.205C61.7248 110.205 76.2035 104.785 78.7033 102.285C79.2992 101.689 79.7718 100.982 80.0943 100.203C80.4168 99.4245 80.5828 98.59 80.5828 97.7473C80.5828 96.9046 80.4168 96.0702 80.0943 95.2917C79.7718 94.5131 79.2992 93.8057 78.7033 93.2098C78.1074 92.614 77.4 92.1413 76.6215 91.8188C75.8429 91.4963 75.0085 91.3303 74.1658 91.3303C73.3231 91.3303 72.4887 91.4963 71.7101 91.8188C70.9316 92.1413 70.2242 92.614 69.6283 93.2098L69.6448 93.2263Z" stroke="#1A1F71" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M53.5573 127.711L61.7248 110.205" stroke="#1A1F71" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M69.8923 127.711L61.7248 110.205" stroke="#1A1F71" stroke-width="4.125" stroke-miterlimit="10" />
          <path d="M131.858 64.4173L130.513 71.9413C130.47 72.1358 130.362 72.3097 130.207 72.4344C130.052 72.5591 129.859 72.627 129.659 72.627C129.46 72.627 129.267 72.5591 129.112 72.4344C128.957 72.3097 128.849 72.1358 128.806 71.9413L127.238 64.4586C126.892 62.5856 126.012 60.8523 124.706 59.4665C123.399 58.0808 121.72 57.1014 119.871 56.6458L112.619 55.0701C112.444 55.0141 112.292 54.904 112.183 54.7558C112.075 54.6075 112.017 54.4287 112.017 54.2451C112.017 54.0615 112.075 53.8827 112.183 53.7344C112.292 53.5861 112.444 53.4761 112.619 53.4201L119.821 51.6298C121.656 51.1164 123.304 50.0844 124.567 48.6576C125.83 47.2308 126.654 45.4698 126.941 43.5861L128.286 36.0703C128.329 35.8759 128.437 35.702 128.592 35.5773C128.747 35.4526 128.941 35.3846 129.14 35.3846C129.339 35.3846 129.532 35.4526 129.687 35.5773C129.842 35.702 129.951 35.8759 129.994 36.0703L131.561 43.5531C131.906 45.4276 132.784 47.1626 134.091 48.55C135.398 49.9373 137.078 50.9179 138.928 51.3741L146.18 52.9416C146.355 52.9976 146.507 53.1076 146.616 53.2559C146.724 53.4042 146.782 53.583 146.782 53.7666C146.782 53.9502 146.724 54.129 146.616 54.2773C146.507 54.4255 146.355 54.5356 146.18 54.5916L138.978 56.3901C137.145 56.9023 135.499 57.9319 134.236 59.3555C132.973 60.7792 132.148 62.5366 131.858 64.4173V64.4173Z" fill="url(#paint3_linear_14_516)" />
          <defs>
            <linearGradient id="paint0_linear_14_516" x1="54.2337" y1="162.708" x2="92.456" y2="57.6936" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1A1F71" />
              <stop offset="0.06" stop-color="#313A85" />
              <stop offset="0.14" stop-color="#51609F" />
              <stop offset="0.24" stop-color="#6D80B7" />
              <stop offset="0.34" stop-color="#839AC9" />
              <stop offset="0.46" stop-color="#95AFD8" />
              <stop offset="0.59" stop-color="#A1BDE2" />
              <stop offset="0.74" stop-color="#A8C5E8" />
              <stop offset="1" stop-color="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint1_linear_14_516" x1="52.1046" y1="78.8275" x2="66.6741" y2="-3.78799" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1A1F71" />
              <stop offset="0.06" stop-color="#313A85" />
              <stop offset="0.14" stop-color="#51609F" />
              <stop offset="0.24" stop-color="#6D80B7" />
              <stop offset="0.34" stop-color="#839AC9" />
              <stop offset="0.46" stop-color="#95AFD8" />
              <stop offset="0.59" stop-color="#A1BDE2" />
              <stop offset="0.74" stop-color="#A8C5E8" />
              <stop offset="1" stop-color="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint2_linear_14_516" x1="115.622" y1="131.762" x2="123.22" y2="88.6476" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1F8654" />
              <stop offset="0.02" stop-color="#1F8C55" />
              <stop offset="0.16" stop-color="#21A65B" />
              <stop offset="0.3" stop-color="#23BA60" />
              <stop offset="0.47" stop-color="#24C863" />
              <stop offset="0.67" stop-color="#25D065" />
              <stop offset="1" stop-color="#25D366" />
            </linearGradient>
            <linearGradient id="paint3_linear_14_516" x1="126.199" y1="72.0568" x2="132.576" y2="35.9301" gradientUnits="userSpaceOnUse">
              <stop stop-color="#1F8654" />
              <stop offset="0.02" stop-color="#1F8C55" />
              <stop offset="0.16" stop-color="#21A65B" />
              <stop offset="0.3" stop-color="#23BA60" />
              <stop offset="0.47" stop-color="#24C863" />
              <stop offset="0.67" stop-color="#25D065" />
              <stop offset="1" stop-color="#25D366" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className='font-bold text-blue-700 text-2xl mt-8'>
        Results of Fantasy Quiz #156
      </p>

      <div className='bg-white w-1/3 p-5 mt-3 flex flex-col items-center rounded-lg'>
        <div className='flex items-center gap-3'>
          <svg className=' bg-yellow-200 rounded-full h-10 w-10' width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.34 11.17C11.17 11.17 11.17 13.807 1 13.807V3.63703C11.17 3.63703 11.17 1 21.34 1V11.17Z" fill="#F0EBE6" stroke="url(#paint0_linear_14_506)" stroke-width="0.716196" stroke-miterlimit="10" />
            <path d="M23.5516 13.3615C13.3816 13.3615 13.3816 16 3.21161 16V5.83002C13.3816 5.83002 13.3816 3.19156 23.5516 3.19156V13.3615Z" fill="url(#paint1_linear_14_506)" />
            <path d="M13.3801 11.9363C14.6728 11.9363 15.7207 10.8884 15.7207 9.59578C15.7207 8.30314 14.6728 7.25525 13.3801 7.25525C12.0875 7.25525 11.0396 8.30314 11.0396 9.59578C11.0396 10.8884 12.0875 11.9363 13.3801 11.9363Z" stroke="#F0EBE6" stroke-width="0.716196" stroke-miterlimit="10" />
            <path d="M3.20874 13.6595C3.51665 13.6587 3.82169 13.7187 4.1064 13.836C4.39111 13.9532 4.64989 14.1255 4.86795 14.3429C5.08601 14.5603 5.25906 14.8185 5.3772 15.1029C5.49534 15.3872 5.55624 15.6921 5.55643 16" stroke="#F0EBE6" stroke-width="0.716196" stroke-miterlimit="10" />
            <path d="M21.211 13.3472C21.2133 12.728 21.4609 12.1348 21.8996 11.6978C22.3382 11.2607 22.9323 11.0153 23.5515 11.0153" stroke="#F0EBE6" stroke-width="0.716196" stroke-miterlimit="10" />
            <path d="M23.5515 5.53065C22.9308 5.53065 22.3355 5.28406 21.8965 4.84513C21.4576 4.40619 21.211 3.81087 21.211 3.19012" stroke="#F0EBE6" stroke-width="0.716196" stroke-miterlimit="10" />
            <path d="M5.55643 5.88302C5.55624 6.19087 5.49533 6.49565 5.37717 6.77992C5.25902 7.06419 5.08595 7.32236 4.86787 7.53964C4.64979 7.75692 4.39099 7.92904 4.10629 8.04615C3.82159 8.16326 3.51658 8.22306 3.20874 8.22212" stroke="#F0EBE6" stroke-width="0.716196" stroke-miterlimit="10" />
            <defs>
              <linearGradient id="paint0_linear_14_506" x1="0.639037" y1="7.40279" x2="21.6981" y2="7.40279" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1F8654" />
                <stop offset="0.02" stop-color="#1F8C55" />
                <stop offset="0.16" stop-color="#21A65B" />
                <stop offset="0.3" stop-color="#23BA60" />
                <stop offset="0.47" stop-color="#24C863" />
                <stop offset="0.67" stop-color="#25D065" />
                <stop offset="1" stop-color="#25D366" />
              </linearGradient>
              <linearGradient id="paint1_linear_14_506" x1="11.9778" y1="17.5456" x2="14.7825" y2="1.64458" gradientUnits="userSpaceOnUse">
                <stop stop-color="#1F8654" />
                <stop offset="0.02" stop-color="#1F8C55" />
                <stop offset="0.16" stop-color="#21A65B" />
                <stop offset="0.3" stop-color="#23BA60" />
                <stop offset="0.47" stop-color="#24C863" />
                <stop offset="0.67" stop-color="#25D065" />
                <stop offset="1" stop-color="#25D366" />
              </linearGradient>
            </defs>
          </svg>

          <p>
            Score Gained : {" "}
            <span className='font-bold text-xl '>{ans}</span>
          </p>

        </div>
        <div className='flex items-center mt-2 gap-3'>

          <svg className=' bg-yellow-200 rounded-full h-10 w-10' width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg
        ">
            <path d="M14.71 1.21C14.617 1.11627 14.5064 1.04188 14.3846 0.991107C14.2627 0.940338 14.132 0.9142 14 0.9142C13.868 0.9142 13.7373 0.940338 13.6154 0.991107C13.4936 1.04188 13.383 1.11627 13.29 1.21L5.84001 8.67L2.71001 5.53C2.61349 5.43676 2.49955 5.36345 2.37469 5.31424C2.24984 5.26504 2.11651 5.24091 1.98233 5.24323C1.84815 5.24555 1.71574 5.27428 1.59266 5.32777C1.46959 5.38126 1.35825 5.45848 1.26501 5.555C1.17177 5.65152 1.09846 5.76546 1.04925 5.89032C1.00005 6.01517 0.97592 6.1485 0.978241 6.28268C0.980563 6.41686 1.00929 6.54927 1.06278 6.67234C1.11628 6.79542 1.19349 6.90676 1.29001 7L5.13001 10.84C5.22297 10.9337 5.33358 11.0081 5.45543 11.0589C5.57729 11.1097 5.708 11.1358 5.84001 11.1358C5.97202 11.1358 6.10273 11.1097 6.22459 11.0589C6.34645 11.0081 6.45705 10.9337 6.55001 10.84L14.71 2.68C14.8115 2.58636 14.8925 2.4727 14.9479 2.3462C15.0033 2.21971 15.0319 2.0831 15.0319 1.945C15.0319 1.8069 15.0033 1.67029 14.9479 1.54379C14.8925 1.41729 14.8115 1.30364 14.71 1.21Z" fill="#26D266" stroke="#26D166" />
          </svg>
          <p>
            Correct Prediction : {" "}
            <span className='font-bold text-xl '>{ans / 30}</span>
          </p>
        </div>
      </div>

      <div>
        <button className='h-10 w-20 bg-green-500'
        
          onClick={() => {
            nav('/', { replace: true });
            setPage(0);
            setAns(0);
            
          }
        }
          >
          Okay
        </button>
      </div>


    </div>
  )
}

export default ResultPage
