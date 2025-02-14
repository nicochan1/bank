import React from "react";
import HeaderBox from "@/components/HeaderBox";


const Home = () => {
    const LoggedIn = { firstName: 'Nico'};

  return (
    <div>
        <section className="home">
            <div className="home-content">
                <div className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={LoggedIn.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                </div>
            </div>
        </section>  
    </div>
  )
}

export default Home;