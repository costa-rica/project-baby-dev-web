import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div>
      <header className={styles.headerCustom}>
        <div className={styles.divBackground}>
          <div className={styles.divLogo}>
            <img
              src="/images/logo3245.png"
              alt="Logo"
              className={styles.logoImage}
            />
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <h2 className={styles.title}>Welcome to Project Baby!</h2>
        <div className={styles.divInfoSuper}>
          <div className={styles.divInfo}>
            Description : Il s’agit du projet MVP de La Capsule. L’objectif du
            Project Baby est d’aider les jeunes familles à gérer leur grossesse
            et les premières années de la vie de leur bébé afin de vivre une
            expérience plus zen.
          </div>

          <ul>
            <li>
              <div className={styles.divInfo}>
                GitHub backend déployé:{" "}
                <a href="https://github.com/costa-rica/Project_Baby_Backend_02">
                  https://github.com/costa-rica/Project_Baby_Backend_02
                </a>
              </div>
            </li>
            <li>
              <div className={styles.divInfo}>
                GitHub frontend déployé:{" "}
                <a href="https://github.com/costa-rica/Project_Baby_Frontend_02">
                  https://github.com/costa-rica/Project_Baby_Frontend_02
                </a>
              </div>
            </li>
            <li>
              <div className={styles.divInfo}>
                Expo go déployé:{" "}
                <a href="https://expo.dev/preview/update?message=replaced%20app.json%3B%20added%20eas.json%3Badded%20eas%20secret%20for%20api%20url%20with%20an%20extra%20backslash%3B%20removed%20first%20backslash%20after%20each%20proce&updateRuntimeVersion=1.0.0&createdAt=2024-11-20T18%3A34%3A04.146Z&slug=exp&projectId=1944ef92-24d6-4fe6-bb3e-35b3c2f150cd&group=136b32a3-759d-44c9-b033-00600aa69ef9">
                  Expo Go Update
                </a>
              </div>
              <div className={styles.divQrCode}>
                ou scanner notre qr code pour aller a l'appli:{" "}
                <img
                  src="/images/ExpoGoQrCode.png"
                  alt="ExpoGoQrCode"
                  className={styles.logoImage}
                />
              </div>
            </li>
          </ul>
          <div>
            {" "}
            crédit pour :{" "}
            <a
              href="https://www.flaticon.com/free-icons/child"
              title="child icons"
            >
              Child icons created by Freepik - Flaticon
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
