import React, { Fragment } from "react";
import classes from "./Contactpage.module.css";
export const Contactpage = () => {
  return (
    <Fragment>
      <h3 className={classes.h}>Contact Us</h3>

      <div>
        <div >
          {" "}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
              fill="#FFE1D8"
            />
            <path
              d="M18 9C14.5778 9 11.0058 11.6763 11 15.5106C10.993 20.0991 18 27 18 27C18 27 25.0074 20.1087 25 15.5106C24.9938 11.682 21.4222 9 18 9ZM18 18.5745C16.2819 18.5745 14.8889 17.2026 14.8889 15.5106C14.8889 13.8186 16.2819 12.4468 18 12.4468C19.7181 12.4468 21.1111 13.8186 21.1111 15.5106C21.1111 17.2026 19.7181 18.5745 18 18.5745Z"
              fill="#FF3D00"
            />
          </svg>
          <label className={classes.label}>Address</label>
      
          <p >Lorem ipsum, 45FDolor Street, MJ52R8</p>
        </div>
      </div>
      <div >
        <div  >
          {" "}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
              fill="#D9EEFF"
            />
            <path
              d="M25.2 12H10.8C9.80595 12 9 12.8187 9 13.8286V22.9714C9 23.9813 9.80595 24.8 10.8 24.8H25.2C26.194 24.8 27 23.9813 27 22.9714V13.8286C27 12.8187 26.194 12 25.2 12Z"
              fill="#2196F3"
            />
            <path
              d="M27 13.84C27 13.6274 26.9572 13.4267 26.892 13.2366L18 19.7829L9.10845 13.2366C9.04275 13.4267 9 13.6279 9 13.84V14.2857L18 20.912L27 14.2857V13.84Z"
              fill="#037BDB"
            />
          </svg>
          <label className={classes.label}>Email Address</label>
          <p>sajanbakeryonline@gmail.com</p>
        </div>
      </div>
      <div >
        <div >
          {" "}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
              fill="#D8FFFB"
            />
            <path
              d="M9 10.0588V11.9647C9.05294 18.9529 18.0529 26.9471 24.0353 27H25.9941C26.5235 27 27 26.5765 27 25.9941V22.2353C27 21.7059 26.5235 21.2294 25.9941 21.2294L21.7059 21.1765L19.5353 23.4529C18.1588 23.4529 12.6 17.8941 12.5471 16.4647L14.8235 14.2941V10.0059C14.8235 9.47647 14.2941 9 13.7647 9H10.0059C9.42353 9 9 9.52941 9 10.0588Z"
              fill="#009688"
            />
          </svg>
          <label className={classes.label}>Phone Number</label>
          <p > +91 9876543210</p>
        </div>
      </div>
      <div >
        <div >
          {" "}
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"
              fill="#D8FFDD"
            />
            <path
              d="M9.22864 26.771L10.4624 22.2668C9.70127 20.9487 9.301 19.453 9.30146 17.921C9.30375 13.1282 13.2039 9.229 17.9971 9.229C20.3232 9.22992 22.5059 10.1353 24.1478 11.7781C25.7892 13.4214 26.6933 15.605 26.6923 17.9279C26.6905 22.7206 22.7894 26.6203 17.9971 26.6203C17.9967 26.6203 17.9971 26.6203 17.9971 26.6203H17.9935C16.5385 26.6199 15.1082 26.2549 13.8382 25.562L9.22864 26.771Z"
              fill="white"
            />
            <path
              d="M9.22879 27C9.16834 27 9.10972 26.9762 9.06621 26.9322C9.00896 26.8741 8.98652 26.7893 9.00804 26.711L10.2167 22.2979C9.4674 20.967 9.07216 19.4557 9.07308 17.9215C9.07491 13.0018 13.0781 9 17.9973 9C20.3834 9.00092 22.6252 9.93016 24.3101 11.6164C25.995 13.3032 26.9224 15.5445 26.9215 17.9279C26.9197 22.847 22.916 26.8493 17.9973 26.8493C16.5368 26.8489 15.0919 26.4884 13.8095 25.8065L9.28695 26.9922C9.26772 26.9977 9.24848 27 9.22879 27Z"
              fill="white"
            />
            <path
              d="M23.109 12.8159C21.7442 11.4502 19.9301 10.6977 17.9993 10.6973C14.013 10.6973 10.771 13.9379 10.7692 17.9214C10.7687 19.2867 11.1507 20.6157 11.8743 21.7666L12.0465 22.0401L11.316 24.706L14.0515 23.9888L14.3158 24.1454C15.425 24.804 16.6973 25.152 17.9943 25.1525H17.997C21.9805 25.1525 25.2226 21.9114 25.2239 17.9274C25.2244 15.997 24.4738 14.1816 23.109 12.8159Z"
              fill="#40C351"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M15.8236 14.2873C15.661 13.9255 15.4897 13.9182 15.3345 13.9118C15.2076 13.9063 15.0629 13.9067 14.9182 13.9067C14.7735 13.9067 14.5381 13.9612 14.3388 14.1788C14.1396 14.3963 13.5781 14.9216 13.5781 15.9906C13.5781 17.0595 14.3567 18.0927 14.4652 18.2374C14.5738 18.3821 15.9683 20.6459 18.1767 21.517C20.0118 22.2406 20.3855 22.0968 20.784 22.0606C21.1824 22.0244 22.0695 21.5353 22.2504 21.0279C22.4313 20.5204 22.4313 20.0858 22.3773 19.9951C22.3228 19.9045 22.1781 19.8504 21.961 19.7414C21.7439 19.6324 20.6754 19.1071 20.4762 19.0348C20.277 18.9624 20.1323 18.9262 19.9871 19.1438C19.8424 19.3608 19.4261 19.8504 19.2992 19.9951C19.1724 20.1403 19.0455 20.1586 18.8284 20.0496C18.6113 19.9406 17.9115 19.7116 17.0812 18.9716C16.4355 18.3959 15.9995 17.6846 15.8726 17.4671C15.7457 17.25 15.8589 17.1323 15.9679 17.0238C16.0654 16.9262 16.1849 16.77 16.2939 16.6432C16.4025 16.5163 16.4387 16.4256 16.511 16.2809C16.5834 16.1357 16.5472 16.0089 16.4927 15.9003C16.4391 15.7913 16.0169 14.7169 15.8236 14.2873Z"
              fill="white"
            />
          </svg>{" "}
          <label className={classes.label}>WhatsApp</label>
          <p >+91 9876543210</p>
        </div>
      </div>

      <hr />
    </Fragment>
  );
};