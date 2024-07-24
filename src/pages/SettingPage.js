import React from 'react';
import { useParams } from "react-router-dom";
import SettingAccount from '../components/Setting/SettingAccount';
import Header from '../components/Header';
import '../styles/Setting/SettingPage.css';

const SettingPage = ({token}) => {
  const userId = useParams();

  return (
    <div style={{ display: "flex" }}>
      <Header userId={userId}/>
      <div className="setting-page">
        <SettingAccount token={token} userId={userId}/>
      </div>
    </div>
  );
};

export default SettingPage;
