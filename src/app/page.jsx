import Cards from "./components/Cards/Cards";
import SubNav from "./components/SubNav/SubNav";
import Recommended from "./components/Recommended/Recommended";
import styles from "./page.module.css";
import UserData from "./data/UserData";
import WritePost from "./components/WritePost/WritePost";

export default function Home() {

  const displayPosts = (e) => {
    return (<Cards data={e} />);
  }

  return (
    <>
      <div className="relative">
        <div className={styles.ImageDiv}>
          <div className={styles.ImageText}>
            <div className={styles.ImageHeading}>Computer Engineering</div>
            <div className={styles.ImageSubheading}>142,765 Computer Engineers follow this</div>
          </div>
        </div>


        <SubNav />
        <div className="container">
          <div className={styles.split}>

            <div className={styles.leftCol}>
              {UserData.map(displayPosts)}
            </div>

            <div className={styles.rightCol}>


              <div className="container d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center w-100 gap-1">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <g clip-path="url(#clip0_1_842)">
                        <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black" />
                        <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black" />
                      </g>
                      <defs>
                        <clipPath id="clip0_1_842">
                          <rect width="18" height="18" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                    <input type="text" className={styles.locationInput} placeholder="Noida, India" />
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <g clip-path="url(#clip0_1_848)">
                      <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_848">
                        <rect width="20" height="20" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>


              <div className="container d-flex gap-2 mt-4">
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <g opacity="0.5" clip-path="url(#clip0_1_853)">
                      <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_853">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="text-secondary">Your location will help us serve better and extend a personalised experience.</div>
              </div>

              <Recommended />

            </div>
          </div>
        </div>
      </div>
      <div className={styles.mobilePost}>
        <WritePost />
      </div>
    </>
  )
}
