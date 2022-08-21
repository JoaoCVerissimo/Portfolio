import React from 'react'

import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './header.module.css'

type Props = {
  listOfToDos: string[]
}

export const Homepage: React.FC<Props> = (props) => {
  const { data: session, status } = useSession()

  // console.log(session?.user?.image)
  const { listOfToDos } = props
  return (
    <div className="">
      <span className="">Ideias para fazer:</span>
      {listOfToDos.map((item, index) => {
        return <li key={index}>{item}</li>
      })}

      <header>
        <title>Azure AD Auth</title>
        <noscript>
          <style>{`.nojs-show { opacity: 1; top: 0; }`}</style>
        </noscript>
        <div className={styles.signedInStatus}>
          <p className={`nojs-show ${!session && status === 'loading' ? styles.loading : styles.loaded}`}>
            {!session && (
              <>
                <span className={styles.notSignedInText}>You are not signed in</span>
                <a
                  href={`/api/auth/signin`}
                  className={styles.buttonPrimary}
                  onClick={(e) => {
                    e.preventDefault()
                    signIn('azure-ad')
                  }}>
                  Sign in
                </a>
              </>
            )}
            {session && (
              <>
                {session?.user?.image && <Image src={session?.user?.image} alt={'user-image'} height={64} width={64} />}
                <span className={styles.signedInText}>
                  <small>Signed in as</small>
                  <br />
                  <strong>{session?.user?.email || session?.user?.name}</strong>
                </span>
                <a
                  href={`/api/auth/signout`}
                  className={styles.button}
                  onClick={(e) => {
                    e.preventDefault()
                    signOut()
                  }}>
                  Sign out
                </a>
              </>
            )}
          </p>
        </div>
        <nav>
          <ul className={styles.navItems}>
            <li className={styles.navItem}>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/storage">
                <a>Azure Storage</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}
