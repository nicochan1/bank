import React from "react";
import HeaderBox from "@/components/HeaderBox";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSideBar from "@/components/RightSideBar";


const Home = () => {
    const LoggedIn = { firstName: 'Nico', lastName: 'Chan', email: 'nicochan@gmail.com'};

  return (
    <div>
        <section className="home">
            <div className="home-content">
                <header>
                    <div className="home-header">
                        <HeaderBox 
                            type="greeting"
                            title="Welcome"
                            user={LoggedIn.firstName || 'Guest'}
                            subtext="Access and manage your account and transactions efficiently."
                        />

                        <TotalBalanceBox 
                            accounts={[]}
                            totalBanks={0}
                            totalCurrentBalance={1250.12}
                        />
                    </div>
                </header>

                RECENT TRANSACTIONS
            </div>
            <RightSideBar 
            user={LoggedIn}
            transcations={[]}
            banks={[{currentBalance: 123.50},{currentBalance: 500.50}]}
            />
        </section>  
    </div>
  )
}

export default Home;