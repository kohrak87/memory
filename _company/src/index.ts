// MVP 시작점: 시스템 동기화 상태를 표시하는 최소한의 UI 정의
import React from 'react';
import { SyncStatus } from './types'; // 추후 정의할 타입 가정

const DashboardMVP: React.FC = () => {
  // 초기 상태는 Pending Sync로 설정하여 안정성 우선 원칙 반영
  const syncStatus: SyncStatus = { status: 'Pending Sync', trust: 0 };

  return (
    <div className="dashboard-app">
      <h1>MVP Dashboard Initialization</h1>
      <div className="sync-status">
        <h2>Sync Status</h2>
        <p>Current State: {syncStatus.status}</p>
        {/* 추후 동기화 로직이 여기에 삽입될 예정 */}
        <div className={`trust-bar ${syncStatus.status === 'Synced (High Trust)' ? 'high' : 'pending'}`}>
          Trust Level: {Math.round(syncStatus.trust * 100)}%
        </div>
      </div>
    </div>
  );
};

export default DashboardMVP;