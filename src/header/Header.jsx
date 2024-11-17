import NavigateButton from '../navigateButton/NavigateButton';
import Search from '../search/Search';
import User from '../user/User';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.sidebar}>
                <NavigateButton
                    handleClick={() => console.log('click')}
                    buttonContent={
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3 20C1.34315 20 0 18.6569 0 17V3C0 1.34315 1.34315 0 3 0H17C18.6569 0 20 1.34315 20 3V17C20 18.6569 18.6569 20 17 20H3ZM2 3C2 2.44772 2.44772 2 3 2H6V18H3C2.44772 18 2 17.5523 2 17V3ZM8 18V2H17C17.5523 2 18 2.44772 18 3V17C18 17.5523 17.5523 18 17 18H8Z"
                                fill="currentColor"
                            />
                        </svg>
                    }
                />
            </div>
            <img
                className={styles.logo}
                // eslint-disable-next-line no-undef
                src={`${process.env.PUBLIC_URL}/images/Logo.png`}
                alt="логотип компании Simpleone"
            ></img>
            <div className={styles.container}>
                <Search
                    placeholderText="Поиск"
                    svgIcon={
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10.0785 11.0212C9.05204 11.8423 7.75002 12.3333 6.33333 12.3333C3.01962 12.3333 0.333333 9.64704 0.333333 6.33333C0.333333 3.01962 3.01962 0.333333 6.33333 0.333333C9.64704 0.333333 12.3333 3.01962 12.3333 6.33333C12.3333 7.74999 11.8424 9.05198 11.0213 10.0784L13.4714 12.5285C13.7318 12.7889 13.7318 13.211 13.4714 13.4713C13.2111 13.7317 12.7889 13.7317 12.5286 13.4713L10.0785 11.0212ZM1.66667 6.33333C1.66667 3.756 3.756 1.66667 6.33333 1.66667C8.91066 1.66667 11 3.756 11 6.33333C11 7.5905 10.5029 8.73156 9.69451 9.57067C9.6716 9.58826 9.64957 9.60755 9.62859 9.62853C9.60761 9.64951 9.58832 9.67155 9.57072 9.69446C8.73161 10.5029 7.59053 11 6.33333 11C3.756 11 1.66667 8.91066 1.66667 6.33333Z"
                                fill="#ABB1BA"
                            />
                        </svg>
                    }
                />
                <User className={styles.user}></User>
            </div>
        </div>
    );
}

export default Header;