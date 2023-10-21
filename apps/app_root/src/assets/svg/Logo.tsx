import React from 'react'

type OwnPropertyType = {}

export const Logo: FC<OwnPropertyType> = React.memo(() => (
  <svg
    width="252"
    height="48"
    viewBox="0 0 252 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M32.1283 16.8432C31.4403 16.2401 30.4511 16.2539 29.8835 16.4289C30.2552 15.9726 31.1216 15.5981 31.3765 15.5527C31.5707 15.6256 32.1283 16.1983 32.1283 16.8432ZM34.3246 14.3458C33.8722 11.9258 28.2484 13.5295 25.4161 12.5016C25.362 13.2071 26.2881 14.3374 27.174 14.7556C25.6598 16.07 24.3004 18.718 24.0257 21.9531C23.7523 18.718 22.3927 16.07 20.8785 14.7557C21.7643 14.3376 22.6913 13.2072 22.6363 12.5019C19.8042 13.5298 14.1802 11.9262 13.727 14.3462C13.6317 14.8586 13.8781 15.6389 14.1443 15.8635C14.1919 15.7011 14.4406 15.1701 15.2245 15.0511C19.1867 14.4524 22.4947 20.559 19.5086 23.028C19.4631 23.066 19.4889 23.135 19.5503 23.135H28.503C28.5637 23.135 28.5895 23.0658 28.5445 23.0282C25.5577 20.5593 28.8657 14.4527 32.828 15.0514C33.6124 15.1704 33.8605 15.7013 33.9083 15.8636C34.1744 15.6391 34.4207 14.8582 34.3246 14.3458ZM35.2884 8.79192C35.2171 8.56327 37.5404 8.55751 37.5404 10.0118C37.5404 10.9862 36.1506 11.4477 36.1506 12.4591C36.1506 12.93 36.6574 13.2754 36.8129 13.2754C36.4548 11.6519 37.9349 12.5016 38.3347 12.805C37.5404 10.6217 39.3282 10.6354 39.1522 9.63429C39.0297 8.93485 37.4756 9.14605 36.9133 8.79192C35.9153 8.16379 34.7346 5.71906 33.9565 8.16379C35.407 9.51034 34.563 11.4926 32.7215 11.4926C32.7215 11.4926 32.7113 11.7832 32.7282 11.8062C34.9245 11.6988 35.6901 10.0845 35.2884 8.79192ZM9.66416 12.805C10.0638 12.5016 11.5437 11.6519 11.1866 13.2754C11.3413 13.2754 11.8481 12.93 11.8481 12.4591C11.8481 11.4477 10.4583 10.9862 10.4583 10.0118C10.4583 8.55751 12.7815 8.56327 12.7103 8.79192C12.3092 10.0846 13.0748 11.699 15.2711 11.8062C15.2874 11.7832 15.2772 11.4925 15.2772 11.4925C13.4365 11.4925 12.5924 9.51034 14.0422 8.16363C13.2641 5.71906 12.0834 8.16363 11.0854 8.79177C10.5229 9.14605 8.96881 8.9347 8.84652 9.63429C8.67128 10.6357 10.4583 10.6217 9.66416 12.805ZM15.9005 16.8432C16.589 16.2401 17.5785 16.2539 18.1452 16.4289C17.775 15.9726 16.9072 15.5981 16.6529 15.5527C16.4587 15.6256 15.9005 16.1983 15.9005 16.8432ZM25.0707 3.30634L23.9995 2L22.928 3.30634L23.9992 4.68096L25.0707 3.30634ZM31.1867 7.25617L30.425 6.32793L29.6637 7.25617L30.4249 8.16348L31.1867 7.25617ZM37.3664 34.0904L36.4008 33.0684L35.4349 34.0902L36.4008 34.9869L37.3664 34.0904ZM18.3356 7.25617L17.574 6.32793L16.8128 7.25617L17.5741 8.16348L18.3356 7.25617ZM16.1534 11.8064H18.9952C21.3844 11.8064 22.4593 10.3398 22.7842 9.06806H25.2153C25.5403 10.3398 26.6146 11.8062 29.0046 11.8062H31.8464C31.8464 11.8062 32.3434 11.1318 32.4681 10.7979C32.9169 9.59621 32.3434 9.03559 31.5066 9.03559L30.4249 10.016L29.3434 9.03589C28.5066 9.03589 27.9331 9.59621 28.3819 10.798C28.4392 10.9516 28.5764 11.1773 28.7063 11.3758C27.6979 11.2373 26.4107 10.5469 26.1285 9.06806C26.1285 9.06806 26.8735 7.88461 27.0607 7.40562C27.7324 5.6831 26.8744 4.9791 25.6196 4.9791L23.9996 6.88324L22.3797 4.9791C21.1249 4.9791 20.2671 5.6831 20.9395 7.40562C21.1257 7.88461 21.8716 9.06821 21.8716 9.06821C21.5886 10.5469 20.3017 11.2373 19.2933 11.3759C19.4238 11.1772 19.5604 10.9516 19.6174 10.7979C20.0654 9.59621 19.4934 9.03574 18.6561 9.03574L17.5743 10.0162L16.4925 9.03605C15.6553 9.03605 15.0833 9.59636 15.5313 10.7982C15.656 11.132 16.1534 11.8064 16.1534 11.8064ZM45.5329 20.6149C44.9844 20.8925 41.7665 22.3999 37.6445 21.8423C37.6872 21.6457 37.7234 21.4478 37.7531 21.2488C40.4966 20.9206 42.7266 20.4552 44.1478 19.6648C45.7678 18.7631 46.4762 16.6106 45.6586 15.0094C45.6373 14.9691 45.5786 14.9618 45.5493 14.9958C45.1011 15.5116 42.2838 18.5765 37.8448 19.5293C37.8334 19.2993 37.8124 19.0699 37.7818 18.8417C39.9378 17.6191 42.0425 16.2103 43.0451 14.9222C44.5599 12.9746 44.4206 10.4903 42.979 9.22373C42.9715 9.21736 42.9629 9.21265 42.9535 9.2099C42.9441 9.20715 42.9343 9.20644 42.9246 9.2078C42.915 9.20917 42.9057 9.21258 42.8975 9.21781C42.8892 9.22304 42.8822 9.22998 42.8768 9.23814C42.4208 9.99069 38.1512 16.8911 33.4639 19.8704C33.4067 19.9069 33.349 19.9427 33.2909 19.9778C33.1565 20.0594 33.1418 20.2342 33.256 20.3378C33.7968 20.8276 34.1325 21.5091 34.1325 22.2659C34.1325 23.5818 33.1184 24.6761 31.7778 24.9135C31.0965 25.0455 30.1134 25.0071 29.1686 24.6947C29.1261 24.6811 29.0821 24.7091 29.0821 24.7518V28.9187C29.0821 28.9858 29.1841 29.0025 29.208 28.9384C29.7825 27.4169 31.5013 27.0938 32.2531 27.0938C32.5237 28.7197 33.0069 30.0664 33.6346 30.7913C34.6569 31.9691 36.3262 31.9526 37.0499 31.1383C37.0557 31.1316 37.06 31.1237 37.0624 31.1151C37.0648 31.1066 37.0652 31.0976 37.0637 31.0889C37.0621 31.0801 37.0586 31.0718 37.0534 31.0646C37.0482 31.0574 37.0415 31.0515 37.0336 31.0472C36.6084 30.803 34.1752 29.3089 33.6881 26.8609C33.8793 26.796 34.0662 26.7191 34.2477 26.6307C35.0332 27.9305 36.1764 29.0882 37.0968 29.5305C38.6428 30.2719 40.0581 29.9113 40.6858 28.8257C40.7086 28.7875 40.6806 28.7398 40.6345 28.7356C39.6782 28.6593 36.7434 27.8181 35.4938 25.7689C35.6383 25.6377 35.7763 25.4994 35.9074 25.3547C37.2153 26.3503 39.0639 27.2303 40.3875 27.41C41.9363 27.6206 43.6911 27.1262 43.7336 25.3253C43.7344 25.2893 43.7021 25.2597 43.6638 25.2619C43.1131 25.2952 39.4679 25.4538 36.8704 23.9628C36.9606 23.7912 37.0448 23.6166 37.1227 23.4391C37.1227 23.4391 41.0475 24.3668 42.9072 24.0596C44.7552 23.7546 45.8376 22.377 45.6287 20.663C45.6226 20.6205 45.5727 20.5947 45.5329 20.6149ZM10.8764 23.4384C10.9545 23.616 11.0389 23.7907 11.1294 23.9623C8.5326 25.4526 4.88895 25.2952 4.33577 25.2614C4.29693 25.2593 4.26446 25.2902 4.26537 25.3256C4.30861 27.1259 6.06284 27.6201 7.61164 27.4095C8.93467 27.2299 10.7842 26.3499 12.0916 25.3544C12.2228 25.4989 12.3609 25.6372 12.5052 25.7686C11.255 27.8177 8.32065 28.659 7.36448 28.7353C7.31821 28.7398 7.2912 28.7873 7.3132 28.8256C7.94088 29.9111 9.35616 30.2718 10.903 29.5303C11.8224 29.088 12.9657 27.9304 13.7508 26.6306C13.9326 26.7187 14.1195 26.7956 14.3107 26.8607C13.8237 29.3088 11.3905 30.8025 10.9652 31.0472C10.9574 31.0515 10.9507 31.0575 10.9456 31.0647C10.9404 31.0719 10.9369 31.0802 10.9354 31.0889C10.9338 31.0976 10.9342 31.1066 10.9366 31.1151C10.9389 31.1237 10.9432 31.1316 10.949 31.1383C11.6727 31.9524 13.3426 31.969 14.3649 30.7911C14.9926 30.0662 15.4752 28.7195 15.7456 27.0936C16.4981 27.0936 18.2164 27.4168 18.7907 28.9381C18.8154 29.0023 18.9174 28.9856 18.9174 28.9184V24.7516C18.9174 24.7091 18.8726 24.6809 18.8301 24.6946C17.8856 25.0071 16.9022 25.045 16.2217 24.913C14.8804 24.6759 13.8662 23.5817 13.8662 22.2659C13.8662 21.5094 14.203 20.8271 14.7425 20.3375C14.8578 20.2343 14.8422 20.0596 14.7088 19.9779C14.6502 19.9429 14.5921 19.9071 14.5343 19.8707C9.84972 16.8931 5.58263 9.99737 5.12261 9.23996C5.11721 9.23159 5.11008 9.22447 5.1017 9.21908C5.09331 9.21369 5.08388 9.21015 5.07402 9.20872C5.06415 9.20728 5.0541 9.20797 5.04453 9.21074C5.03496 9.21352 5.02609 9.21831 5.01852 9.22479C3.57897 10.4921 3.43908 12.9754 4.95404 14.9225C5.95663 16.2106 8.06135 17.6194 10.2166 18.842C10.1862 19.0701 10.1655 19.2994 10.1544 19.5293C5.71903 18.5774 2.9038 15.5177 2.45136 14.9982C2.42101 14.9627 2.36108 14.9698 2.3406 15.0103C1.52432 16.6125 2.23287 18.7632 3.85116 19.6649C5.27251 20.4554 7.5027 20.9207 10.246 21.2489C10.2757 21.4479 10.3118 21.6459 10.3545 21.8425C6.23672 22.3993 3.02047 20.8954 2.46759 20.6156C2.42662 20.5947 2.37686 20.6206 2.3717 20.6639C2.16338 22.3777 3.24502 23.754 5.09302 24.0591C6.9521 24.3664 10.8764 23.4384 10.8764 23.4384ZM36.401 36.3031L34.9708 35.1779C34.4 35.5178 33.9807 36.0573 33.8177 36.6899C32.9574 36.8102 30.6124 36.2893 30.8404 35.9438C33.4106 32.3287 31.4447 30.1762 29.0819 30.2961V32.7236C29.0819 33.5035 28.4015 34.1354 27.5632 34.1354H25.9316C24.7612 34.1354 23.9992 35.3119 23.9992 35.3119C23.9992 35.3119 23.2372 34.1353 22.0668 34.1353H20.4353C19.5963 34.1353 18.9174 33.5034 18.9174 32.7236V30.2961C16.5546 30.1762 14.5871 32.3286 17.1581 35.9437C17.3842 36.2857 14.9736 36.8331 13.8429 36.6947C13.545 36.3858 13.1153 36.191 12.6342 36.191C12.4296 36.1911 12.2267 36.2276 12.0348 36.2987C12.0348 36.2987 7.59176 32.0919 7.51044 32.0508L7.54685 31.9658C7.80023 31.4924 7.41288 30.9765 7.168 31.013C7.45248 30.6716 7.46568 29.1779 5.88745 28.8322C5.93372 29.1323 5.95724 29.7447 5.95724 29.7447C5.95724 29.7447 4.7392 29.0862 4.12745 29.6546C3.59004 30.2908 4.33577 31.4449 4.33577 31.4449C4.33577 31.4449 3.71248 31.4601 3.40524 31.434C3.85693 32.9619 5.37204 32.8537 5.69977 32.5522C5.67852 32.795 6.22625 33.1413 6.69052 32.8637L6.89444 32.7651C6.9304 32.8132 11.2577 36.9017 11.2577 36.9017C11.059 37.1966 10.9644 37.5586 11.0297 37.9446C11.1324 38.5477 11.6346 39.0477 12.2764 39.1775C12.7296 39.2686 13.1556 39.1806 13.4973 38.9806L14.6428 40.0437C14.7445 40.1363 14.8826 40.1939 15.0364 40.183C15.3166 40.1642 15.5265 39.9372 15.5052 39.6767C15.4961 39.5591 15.436 39.4582 15.3532 39.3816C15.335 39.3616 14.1864 38.2953 14.1864 38.2953C15.134 37.6312 16.8993 37.1631 18.3643 37.1631C18.6216 37.1631 18.7427 36.9452 18.6541 36.7317C17.9903 35.1356 19.4173 33.9792 20.8936 34.9205C21.5375 35.3309 22.1916 36.1394 22.6844 37.4884C20.2624 38.0748 17.2212 39.6905 16.606 41.4541C16.369 42.1351 17.1516 43.0633 18.102 43.2501C18.1103 43.2519 18.1189 43.2521 18.1273 43.2506C18.1357 43.2491 18.1437 43.2459 18.1508 43.2413C18.158 43.2366 18.1641 43.2306 18.169 43.2236C18.1738 43.2166 18.1772 43.2087 18.1789 43.2003C18.6754 40.5675 21.5068 38.6055 22.9801 38.2723C23.054 38.4706 23.0298 38.4065 23.1039 38.604C21.4992 39.3629 19.9432 40.9633 19.4989 42.8662C19.2948 43.7376 20.2666 44.5231 21.0688 44.7381C21.1092 44.7487 21.1488 44.7208 21.151 44.6819C21.3035 42.2756 22.366 40.2319 23.318 39.3022C23.344 39.4841 23.3636 39.6668 23.3767 39.85C23.3767 39.85 22.402 42.5655 22.402 44.5469C22.402 45.4688 23.7721 46.1122 23.9743 46.2022C24.2272 46.1122 25.5962 45.4688 25.5962 44.5469C25.5962 42.5654 24.6219 39.8498 24.6219 39.8498C24.6352 39.6666 24.655 39.4839 24.6813 39.3021C25.6327 40.2322 26.6958 42.2748 26.8477 44.6812C26.8485 44.6906 26.8515 44.6998 26.8563 44.708C26.8611 44.7162 26.8676 44.7232 26.8754 44.7286C26.8832 44.7341 26.8921 44.7377 26.9015 44.7393C26.9108 44.741 26.9204 44.7405 26.9296 44.7381C27.7328 44.5231 28.7037 43.7376 28.5005 42.8662C28.0554 40.9636 26.5001 39.3629 24.8956 38.604C24.9689 38.4065 24.9446 38.4705 25.0188 38.2722C26.4928 38.6054 29.3232 40.5673 29.8198 43.2002C29.8234 43.217 29.8336 43.2316 29.848 43.2409C29.8624 43.2502 29.8799 43.2534 29.8967 43.2498C30.8465 43.0632 31.6303 42.1346 31.3919 41.4538C30.7782 39.6902 27.7363 38.0745 25.3139 37.4881C25.8076 36.1393 26.4618 35.3306 27.1057 34.9202C28.5811 33.9789 30.0082 35.1351 29.3444 36.7314C29.2558 36.9449 29.376 37.1628 29.6342 37.1628C31.2915 37.1628 33.3333 37.7613 34.1412 38.5643C34.6575 39.339 35.6114 39.8345 36.688 39.7284C37.9112 39.6086 38.9087 38.6897 39.0464 37.5536C39.1667 36.5583 38.6519 35.6647 37.8314 35.1776L36.401 36.3031ZM25.8607 29.0519C26.3702 28.8629 27.1689 29.0158 27.1417 29.7514C27.1352 29.9183 27.369 29.9183 27.386 29.7479C27.5385 28.6464 26.7943 28.3293 26.0153 28.4582C25.9185 28.0795 25.8393 27.7485 25.7492 27.4204C25.6773 27.1549 25.6509 26.6564 25.9581 26.6564C26.1238 26.6564 26.0572 27.12 26.0416 27.3198C26.0279 27.4951 26.0909 27.6011 26.2332 27.6061C26.3218 27.6098 26.4325 27.4966 26.4987 27.4215C26.9445 26.9173 27.0479 26.1369 26.5257 25.7604C26.0887 25.4444 24.9945 25.6796 24.6938 26.1297C24.6483 25.9601 24.4313 25.6802 24.3272 25.5583C24.226 25.4392 24.1998 25.3578 24.3397 25.2534C24.4057 25.2027 24.6052 25.0042 24.6052 24.7994C24.6052 24.6783 24.5111 24.4547 24.2128 24.4547C23.9773 24.4547 23.7156 24.6176 23.7156 24.9812C23.7156 25.062 23.7353 25.1485 23.7874 25.2417C23.6387 25.2171 23.2345 25.2271 23.0269 25.2784L25.8965 33.1529C26.7179 32.7475 27.3201 32.1055 27.3201 31.4165C27.3201 30.8294 26.4553 31.0242 26.0353 31.4822C25.9003 30.7377 25.7801 30.0503 25.6487 29.3651C25.6129 29.176 25.709 29.1088 25.8607 29.0519ZM21.803 23.7026L22.4059 25.3776C21.8898 25.5005 21.0595 25.8768 21.0595 26.3752C21.0595 27.0389 22.2339 27.471 22.9127 27.4191C22.879 27.5705 22.9179 27.7054 23.0235 27.8287C22.7771 27.8287 22.3122 27.9434 22.1595 28.1079C21.7995 27.7726 21.2363 27.6505 20.9685 27.8545C20.6995 28.0603 20.6915 28.4086 20.9723 28.8025C21.168 29.0751 21.2415 29.3441 21.0215 29.66C21.8397 29.66 21.5384 28.5961 21.859 28.5961C21.8169 28.8025 21.8426 29.0412 21.9357 29.3059C21.9973 29.4819 21.9973 29.6069 21.8917 29.7763C21.6277 30.1984 21.2172 31.1676 21.2727 32.0442C21.0045 32.0427 20.8681 31.9772 20.9626 31.6106C20.9978 31.4744 20.9136 31.3769 20.8021 31.5451C20.6789 31.7305 20.6194 32.0473 20.6194 32.1826C20.6194 32.9631 21.5495 33.1203 21.9042 32.9552C22.9309 33.949 24.9478 33.6838 25.6229 33.3504L22.0721 23.6078C21.9996 23.4237 21.7393 23.5114 21.803 23.7026ZM21.6801 31.728C21.6067 31.327 22.1647 30.6101 22.8746 29.9183C22.7235 30.3692 22.8174 31.146 23.1137 31.4137C22.5988 31.4137 21.9873 31.5103 21.6801 31.728Z"
      fill="#CBB478"
    />
    <path
      d="M129.662 21.9719H127.821V11.2302H135.861V21.9719H134.02V12.8414H129.662V21.9719Z"
      fill="white"
    />
    <path
      d="M140.312 21.9719H138.471V11.2302H143.12C144.061 11.2302 144.798 11.5269 145.33 12.1202C145.872 12.7136 146.143 13.5166 146.143 14.5294C146.143 15.5422 145.872 16.3453 145.33 16.9386C144.798 17.532 144.061 17.8286 143.12 17.8286H140.312V21.9719ZM140.312 12.8414V16.2174H142.798C143.238 16.2174 143.591 16.0691 143.857 15.7724C144.133 15.4757 144.271 15.0614 144.271 14.5294C144.271 13.9974 144.133 13.5831 143.857 13.2864C143.591 12.9898 143.238 12.8414 142.798 12.8414H140.312Z"
      fill="white"
    />
    <path
      d="M147.922 21.9719H146.219V21.3581L150.055 11.2302H151.866L155.702 21.3581V21.9719H153.891L152.94 19.3171H148.889L147.922 21.9719ZM150.93 13.6854L149.441 17.7826H152.387L150.93 13.6854Z"
      fill="white"
    />
    <path
      d="M162.18 21.9719H157.239V11.2302H161.766C162.738 11.2302 163.489 11.4757 164.021 11.9668C164.564 12.4578 164.835 13.1739 164.835 14.1151C164.835 15.1995 164.405 15.9616 163.546 16.4015C164.681 16.821 165.249 17.6854 165.249 18.9949C165.249 19.9668 164.983 20.7084 164.451 21.22C163.919 21.7212 163.162 21.9719 162.18 21.9719ZM159.081 17.3683V20.3606H161.873C162.896 20.3606 163.408 19.8696 163.408 18.8875C163.408 17.8747 162.896 17.3683 161.873 17.3683H159.081ZM159.081 12.8414V15.8338H161.459C162.472 15.8338 162.978 15.3325 162.978 14.3299C162.978 13.3376 162.472 12.8414 161.459 12.8414H159.081Z"
      fill="white"
    />
    <path
      d="M168.933 21.9719H167.245V11.2302H169.087V18.6726L173.751 11.2302H175.439V21.9719H173.598V14.5294L168.933 21.9719Z"
      fill="white"
    />
    <path
      d="M181.927 21.9719H180.086V12.8414H176.971V11.2302H185.042V12.8414H181.927V21.9719Z"
      fill="white"
    />
    <path
      d="M193.488 21.9719H186.583V11.2302H193.472V12.8414H188.424V15.8184H192.751V17.3529H188.424V20.3606H193.488V21.9719Z"
      fill="white"
    />
    <path
      d="M194.605 21.9719H194.253V20.2839H194.544C195.199 20.2839 195.649 20.0077 195.894 19.4552C196.14 18.8824 196.263 17.8747 196.263 16.4322V11.2302H202.968V21.9719H201.127V12.8414H197.951V16.9693C197.951 20.3043 196.835 21.9719 194.605 21.9719Z"
      fill="white"
    />
    <path
      d="M210.225 21.9719H205.576V11.2302H207.417V15.3734H210.225C211.166 15.3734 211.903 15.6701 212.435 16.2634C212.977 16.8568 213.248 17.6598 213.248 18.6726C213.248 19.6854 212.977 20.4885 212.435 21.0818C211.903 21.6752 211.166 21.9719 210.225 21.9719ZM209.903 16.9847H207.417V20.3606H209.903C210.343 20.3606 210.696 20.2123 210.962 19.9156C211.238 19.6189 211.376 19.2046 211.376 18.6726C211.376 18.1407 211.238 17.7263 210.962 17.4297C210.696 17.133 210.343 16.9847 209.903 16.9847Z"
      fill="white"
    />
    <path
      d="M218.729 22.202C217.4 22.202 216.372 21.8645 215.645 21.1893C214.919 20.5141 214.556 19.5627 214.556 18.335V14.867C214.556 13.6394 214.919 12.688 215.645 12.0128C216.372 11.3376 217.4 11 218.729 11C219.865 11 220.806 11.312 221.553 11.9361C222.31 12.5703 222.688 13.4962 222.688 14.7136V14.867H220.847V14.7136C220.847 14.0486 220.627 13.5473 220.187 13.2097C219.747 12.8619 219.256 12.688 218.714 12.688C217.947 12.688 217.369 12.867 216.98 13.2251C216.592 13.5729 216.397 14.0793 216.397 14.7442V18.4578C216.397 19.1228 216.592 19.6343 216.98 19.9923C217.369 20.3402 217.947 20.5141 218.714 20.5141C219.256 20.5141 219.747 20.3453 220.187 20.0077C220.627 19.6598 220.847 19.1535 220.847 18.4885V18.335H222.688V18.4885C222.688 19.7059 222.31 20.6317 221.553 21.266C220.806 21.89 219.865 22.202 218.729 22.202Z"
      fill="white"
    />
    <path
      d="M228.721 21.9719H226.88V12.8414H223.765V11.2302H231.836V12.8414H228.721V21.9719Z"
      fill="white"
    />
    <path
      d="M238.317 21.9719H233.376V11.2302H237.903C238.875 11.2302 239.626 11.4757 240.158 11.9668C240.701 12.4578 240.972 13.1739 240.972 14.1151C240.972 15.1995 240.542 15.9616 239.683 16.4015C240.818 16.821 241.386 17.6854 241.386 18.9949C241.386 19.9668 241.12 20.7084 240.588 21.22C240.056 21.7212 239.299 21.9719 238.317 21.9719ZM235.218 17.3683V20.3606H238.01C239.033 20.3606 239.545 19.8696 239.545 18.8875C239.545 17.8747 239.033 17.3683 238.01 17.3683H235.218ZM235.218 12.8414V15.8338H237.596C238.609 15.8338 239.115 15.3325 239.115 14.3299C239.115 13.3376 238.609 12.8414 237.596 12.8414H235.218Z"
      fill="white"
    />
    <path
      d="M57.8413 38.8517H56V28.11H60.6492C61.5903 28.11 62.3269 28.4067 62.8588 29C63.4009 29.5934 63.672 30.3964 63.672 31.4092C63.672 32.422 63.4009 33.2251 62.8588 33.8184C62.3269 34.4118 61.5903 34.7084 60.6492 34.7084H57.8413V38.8517ZM57.8413 29.7212V33.0972H60.327C60.7669 33.0972 61.1198 32.9489 61.3858 32.6522C61.662 32.3555 61.8 31.9412 61.8 31.4092C61.8 30.8772 61.662 30.4629 61.3858 30.1662C61.1198 29.8696 60.7669 29.7212 60.327 29.7212H57.8413Z"
      fill="white"
    />
    <path
      d="M71.8775 35.3069V31.6547C71.8775 31.0307 71.6678 30.5294 71.2484 30.1509C70.829 29.7621 70.2459 29.5678 69.4992 29.5678C68.7524 29.5678 68.1693 29.7621 67.7499 30.1509C67.3305 30.5294 67.1208 31.0307 67.1208 31.6547V35.3069C67.1208 35.931 67.3305 36.4373 67.7499 36.8261C68.1693 37.2046 68.7524 37.3939 69.4992 37.3939C70.2459 37.3939 70.829 37.2046 71.2484 36.8261C71.6678 36.4373 71.8775 35.931 71.8775 35.3069ZM65.2795 35.2148V31.7468C65.2795 30.5499 65.658 29.6087 66.415 28.9233C67.172 28.2276 68.2 27.8798 69.4992 27.8798C70.7983 27.8798 71.8263 28.2276 72.5833 28.9233C73.3403 29.6087 73.7188 30.5499 73.7188 31.7468V35.2148C73.7188 36.4118 73.3403 37.3581 72.5833 38.0537C71.8263 38.7391 70.7983 39.0818 69.4992 39.0818C68.2 39.0818 67.172 38.7391 66.415 38.0537C65.658 37.3581 65.2795 36.4118 65.2795 35.2148Z"
      fill="white"
    />
    <path
      d="M79.8937 39.0818C78.5639 39.0818 77.5358 38.7442 76.8095 38.0691C76.0832 37.3939 75.7201 36.4425 75.7201 35.2148V31.7468C75.7201 30.5192 76.0832 29.5678 76.8095 28.8926C77.5358 28.2174 78.5639 27.8798 79.8937 27.8798C81.0291 27.8798 81.9702 28.1918 82.717 28.8159C83.474 29.4501 83.8524 30.376 83.8524 31.5934V31.7468H82.0112V31.5934C82.0112 30.9284 81.7912 30.4271 81.3514 30.0895C80.9115 29.7417 80.4205 29.5678 79.8783 29.5678C79.1111 29.5678 78.5332 29.7468 78.1445 30.1049C77.7557 30.4527 77.5614 30.9591 77.5614 31.624V35.3376C77.5614 36.0026 77.7557 36.5141 78.1445 36.8721C78.5332 37.2199 79.1111 37.3939 79.8783 37.3939C80.4205 37.3939 80.9115 37.2251 81.3514 36.8875C81.7912 36.5396 82.0112 36.0333 82.0112 35.3683V35.2148H83.8524V35.3683C83.8524 36.5857 83.474 37.5115 82.717 38.1458C81.9702 38.7698 81.0291 39.0818 79.8937 39.0818Z"
      fill="white"
    />
    <path
      d="M89.8697 39.0818C88.5399 39.0818 87.5118 38.7442 86.7855 38.0691C86.0593 37.3939 85.6961 36.4425 85.6961 35.2148V31.7468C85.6961 30.5192 86.0593 29.5678 86.7855 28.8926C87.5118 28.2174 88.5399 27.8798 89.8697 27.8798C91.0052 27.8798 91.9463 28.1918 92.693 28.8159C93.45 29.4501 93.8285 30.376 93.8285 31.5934V31.7468H91.9872V31.5934C91.9872 30.9284 91.7672 30.4271 91.3274 30.0895C90.8875 29.7417 90.3965 29.5678 89.8544 29.5678C89.0872 29.5678 88.5092 29.7468 88.1205 30.1049C87.7318 30.4527 87.5374 30.9591 87.5374 31.624V35.3376C87.5374 36.0026 87.7318 36.5141 88.1205 36.8721C88.5092 37.2199 89.0872 37.3939 89.8544 37.3939C90.3965 37.3939 90.8875 37.2251 91.3274 36.8875C91.7672 36.5396 91.9872 36.0333 91.9872 35.3683V35.2148H93.8285V35.3683C93.8285 36.5857 93.45 37.5115 92.693 38.1458C91.9463 38.7698 91.0052 39.0818 89.8697 39.0818Z"
      fill="white"
    />
    <path
      d="M97.6669 38.8517H95.979V28.11H97.8203V35.5524L102.485 28.11H104.173V38.8517H102.331V31.4092L97.6669 38.8517Z"
      fill="white"
    />
    <path
      d="M108.467 38.8517H106.779V28.11H108.62V35.5524L113.285 28.11H114.973V38.8517H113.132V31.4092L108.467 38.8517ZM108.406 25.4092V25.2251H109.848V25.3939C109.848 25.9872 110.191 26.2839 110.876 26.2839C111.572 26.2839 111.919 25.9872 111.919 25.3939V25.2251H113.346V25.4092C113.346 26.0537 113.121 26.5601 112.671 26.9284C112.231 27.2864 111.633 27.4655 110.876 27.4655C110.119 27.4655 109.516 27.2864 109.065 26.9284C108.626 26.5601 108.406 26.0537 108.406 25.4092Z"
      fill="white"
    />
    <path
      d="M121.446 39.0818C120.116 39.0818 119.088 38.7442 118.362 38.0691C117.636 37.3939 117.272 36.4425 117.272 35.2148V31.7468C117.272 30.5192 117.636 29.5678 118.362 28.8926C119.088 28.2174 120.116 27.8798 121.446 27.8798C122.582 27.8798 123.523 28.1918 124.269 28.8159C125.026 29.4501 125.405 30.376 125.405 31.5934V31.7468H123.564V31.5934C123.564 30.9284 123.344 30.4271 122.904 30.0895C122.464 29.7417 121.973 29.5678 121.431 29.5678C120.664 29.5678 120.086 29.7468 119.697 30.1049C119.308 30.4527 119.114 30.9591 119.114 31.624V35.3376C119.114 36.0026 119.308 36.5141 119.697 36.8721C120.086 37.2199 120.664 37.3939 121.431 37.3939C121.973 37.3939 122.464 37.2251 122.904 36.8875C123.344 36.5396 123.564 36.0333 123.564 35.3683V35.2148H125.405V35.3683C125.405 36.5857 125.026 37.5115 124.269 38.1458C123.523 38.7698 122.582 39.0818 121.446 39.0818Z"
      fill="white"
    />
    <path
      d="M129.397 38.8517H127.555V28.11H129.397V32.6675H130.762L133.57 28.11H135.273V28.7238L132.373 33.3734L135.488 38.2379V38.8517H133.678L130.762 34.2788H129.397V38.8517Z"
      fill="white"
    />
    <path
      d="M143.163 35.3069V31.6547C143.163 31.0307 142.953 30.5294 142.534 30.1509C142.115 29.7621 141.532 29.5678 140.785 29.5678C140.038 29.5678 139.455 29.7621 139.036 30.1509C138.616 30.5294 138.407 31.0307 138.407 31.6547V35.3069C138.407 35.931 138.616 36.4373 139.036 36.8261C139.455 37.2046 140.038 37.3939 140.785 37.3939C141.532 37.3939 142.115 37.2046 142.534 36.8261C142.953 36.4373 143.163 35.931 143.163 35.3069ZM136.565 35.2148V31.7468C136.565 30.5499 136.944 29.6087 137.701 28.9233C138.458 28.2276 139.486 27.8798 140.785 27.8798C142.084 27.8798 143.112 28.2276 143.869 28.9233C144.626 29.6087 145.004 30.5499 145.004 31.7468V35.2148C145.004 36.4118 144.626 37.3581 143.869 38.0537C143.112 38.7391 142.084 39.0818 140.785 39.0818C139.486 39.0818 138.458 38.7391 137.701 38.0537C136.944 37.3581 136.565 36.4118 136.565 35.2148Z"
      fill="white"
    />
    <path
      d="M149 38.8517H147.313V28.11H149.154V35.5524L153.819 28.11H155.506V38.8517H153.665V31.4092L149 38.8517ZM148.939 25.4092V25.2251H150.381V25.3939C150.381 25.9872 150.724 26.2839 151.409 26.2839C152.105 26.2839 152.453 25.9872 152.453 25.3939V25.2251H153.88V25.4092C153.88 26.0537 153.655 26.5601 153.205 26.9284C152.765 27.2864 152.166 27.4655 151.409 27.4655C150.653 27.4655 150.049 27.2864 149.599 26.9284C149.159 26.5601 148.939 26.0537 148.939 25.4092Z"
      fill="white"
    />
    <path
      d="M167.829 39.0358H165.988V37.624H165.297C164.111 37.624 163.098 37.2916 162.259 36.6266C161.441 35.9616 161.032 35.046 161.032 33.8798V32.7749C161.032 31.6087 161.441 30.6931 162.259 30.0281C163.098 29.3632 164.111 29.0307 165.297 29.0307H165.988V27.8031H167.829V29.0307H168.52C169.716 29.0307 170.724 29.3632 171.542 30.0281C172.371 30.6931 172.785 31.6087 172.785 32.7749V33.8798C172.785 35.0563 172.371 35.9719 171.542 36.6266C170.724 37.2916 169.716 37.624 168.52 37.624H167.829V39.0358ZM165.221 36.0128H165.988V30.6419H165.221C164.525 30.6419 163.957 30.8465 163.518 31.2558C163.088 31.665 162.873 32.1816 162.873 32.8056V33.8491C162.873 34.4731 163.088 34.9898 163.518 35.399C163.957 35.8082 164.525 36.0128 165.221 36.0128ZM167.829 30.6419V36.0128H168.596C169.292 36.0128 169.855 35.8082 170.284 35.399C170.724 34.9898 170.944 34.4731 170.944 33.8491V32.8056C170.944 32.1816 170.724 31.665 170.284 31.2558C169.855 30.8465 169.292 30.6419 168.596 30.6419H167.829Z"
      fill="white"
    />
    <path
      d="M181.688 38.8517H174.783V28.11H181.673V29.7212H176.625V32.6982H180.952V34.2327H176.625V37.2404H181.688V38.8517Z"
      fill="white"
    />
    <path
      d="M184.371 41H182.683V37.2404H183.512C183.9 36.7187 184.202 36.1509 184.417 35.5371C184.632 34.9028 184.739 34.0077 184.739 32.8517V28.11H191.352V37.2404H192.611V41H190.923V38.8517H184.371V41ZM185.491 37.2404H189.511V29.7212H186.427V32.8517C186.427 33.6598 186.376 34.3504 186.274 34.9233C186.161 35.5166 186.054 35.9616 185.951 36.2583C185.849 36.5345 185.696 36.8619 185.491 37.2404Z"
      fill="white"
    />
    <path
      d="M201.281 38.8517H194.376V28.11H201.265V29.7212H196.217V32.6982H200.544V34.2327H196.217V37.2404H201.281V38.8517Z"
      fill="white"
    />
    <path
      d="M205.114 38.8517H203.273V28.11H207.922C208.863 28.11 209.6 28.4067 210.132 29C210.674 29.5934 210.945 30.3964 210.945 31.4092C210.945 32.422 210.674 33.2251 210.132 33.8184C209.6 34.4118 208.863 34.7084 207.922 34.7084H205.114V38.8517ZM205.114 29.7212V33.0972H207.6C208.04 33.0972 208.393 32.9489 208.659 32.6522C208.935 32.3555 209.073 31.9412 209.073 31.4092C209.073 30.8772 208.935 30.4629 208.659 30.1662C208.393 29.8696 208.04 29.7212 207.6 29.7212H205.114Z"
      fill="white"
    />
    <path
      d="M212.724 38.8517H211.021V38.2379L214.857 28.11H216.668L220.504 38.2379V38.8517H218.693L217.742 36.1969H213.691L212.724 38.8517ZM215.732 30.5652L214.243 34.6624H217.189L215.732 30.5652Z"
      fill="white"
    />
    <path
      d="M231.248 41H229.56V38.8517H222.041V28.11H223.882V37.2404H228.148V28.11H229.989V37.2404H231.248V41Z"
      fill="white"
    />
    <path
      d="M234.694 38.8517H233.006V28.11H234.847V35.5524L239.512 28.11H241.2V38.8517H239.359V31.4092L234.694 38.8517Z"
      fill="white"
    />
    <path
      d="M245.494 38.8517H243.806V28.11H245.648V35.5524L250.312 28.11H252V38.8517H250.159V31.4092L245.494 38.8517Z"
      fill="white"
    />
    <path
      d="M244.221 21.9719H242.517V21.3581L246.353 11.2302H248.164L252 21.3581V21.9719H250.189L249.238 19.3171H245.187L244.221 21.9719ZM247.228 13.6854L245.74 17.7826H248.686L247.228 13.6854Z"
      fill="white"
    />
    <path
      d="M98.503 21.7417H96.6617V11H101.311C102.252 11 102.989 11.2967 103.521 11.89C104.063 12.4834 104.334 13.2864 104.334 14.2992C104.334 15.312 104.063 16.1151 103.521 16.7084C102.989 17.3018 102.252 17.5985 101.311 17.5985H98.503V21.7417ZM98.503 12.6113V15.9872H100.989C101.429 15.9872 101.782 15.8389 102.047 15.5422C102.324 15.2455 102.462 14.8312 102.462 14.2992C102.462 13.7673 102.324 13.3529 102.047 13.0563C101.782 12.7596 101.429 12.6113 100.989 12.6113H98.503Z"
      fill="white"
    />
    <path
      d="M106.113 21.7417H104.41V21.1279L108.246 11H110.056L113.892 21.1279V21.7417H112.082L111.131 19.087H107.08L106.113 21.7417ZM109.12 13.4552L107.632 17.5524H110.578L109.12 13.4552Z"
      fill="white"
    />
    <path
      d="M118.618 21.7417H116.776V12.6113H113.662V11H121.732V12.6113H118.618V21.7417Z"
      fill="white"
    />
    <path
      d="M68.5821 21.7417H66.7408V11H74.7811V21.7417H72.9398V12.6113H68.5821V21.7417Z"
      fill="white"
    />
    <path
      d="M78.1721 21.7417H76.3309V11H84.3711V21.7417H82.5299V12.6113H78.1721V21.7417Z"
      fill="white"
    />
    <path
      d="M57.7032 21.7417H56V21.1279L59.836 11H61.6466L65.4826 21.1279V21.7417H63.672L62.7207 19.087H58.6699L57.7032 21.7417ZM60.7106 13.4552L59.2222 17.5524H62.1683L60.7106 13.4552Z"
      fill="white"
    />
    <path
      d="M87.2405 21.7417H85.5373V21.1279L89.3733 11H91.1839L95.0199 21.1279V21.7417H93.2093L92.258 19.087H88.2071L87.2405 21.7417ZM90.2479 13.4552L88.7595 17.5524H91.7056L90.2479 13.4552Z"
      fill="white"
    />
  </svg>
))
