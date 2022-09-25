import styles from './header.module.css';
import Link from 'next/link';
import { FaRegUserCircle } from 'react-icons/fa';
import { maybeFixMetamaskConnection } from '../../utils/utils';
import { userActions } from '../../store/slices/userSlice';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import{ ethers } from 'ethers';

export default function Header() {

    const userAddress = useSelector((state) => state.user.address);
    const dispatch = useDispatch();
    
    const connectWallet = async () => {
        const metamask = window.ethereum;
        try {
            const accounts = await metamask.request({ method: "eth_requestAccounts" });
            if ( accounts.length ) {
                const account = accounts[0];
                dispatch( userActions.setAddress(account));
            }
        } catch(error) {
            console.log(error);
        }
    }
    
    useEffect(() => {
        maybeFixMetamaskConnection();
        const metamask = window.ethereum;
        if ( metamask ) {
            metamask.on('accountsChanged', async (accounts) => {
                if (accounts.length > 0) {
                    dispatch(userActions.setAddress(accounts[0]));
                } else {
                    dispatch(userActions.removeUser());
                }
            })
        }
        
    }, [userAddress, dispatch]);

    return (
        <section className={styles.header}>
            <div className={styles.logo}>
                <span>VERTICAL</span>
            </div>
            <ul>
                <li>
                    <Link href='/pdf' passHref>
                        <span className={styles.redirect}>pdf</span>
                    </Link>
                </li>
                <li>
                    <Link href='/arte' passHref>
                        <span className={styles.redirect}>arte</span>
                    </Link>
                </li>
                <li>
                    {
                        userAddress
                        ?
                        <FaRegUserCircle className={styles.icon} />
                        :
                        <button onClick={connectWallet}>LOGIN</button>
                    }
                </li>
            </ul>
        </section>
    )
}