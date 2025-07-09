import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faVenus, faMars, faWalking, faUsers } from "@fortawesome/free-solid-svg-icons";

function DashboardStats({ users }) {
  if (users.length === 0) return <div className="stats-grid skeleton"></div>;

  // KEWARGANEGARAAN
  const nationalitySet = new Set(users.map(u => u.nat));
  const nationalityCount = nationalitySet.size;

  // MAYORITAS KELAMIN
  const genderCount = users.reduce((acc, u) => {
    acc[u.gender] = (acc[u.gender] || 0) + 1;
    return acc;
  }, {});
  const mostGender = genderCount.female >= genderCount.male ? "Female" : "Male";
  const genderIcon = mostGender === "Female" ? faVenus : faMars;

  // RATA-RATA USIA
  const avgAge = Math.round(users.reduce((sum, u) => sum + u.dob.age, 0) / users.length);

  // RATA-RATA KEANGGOTAAN/MEMBERSHIP (dalam tahun)
  const now = new Date();
  const avgMembership = Math.round(
    users.reduce((sum, u) => {
      const regDate = new Date(u.registered.date);
      return sum + ((now - regDate) / (1000 * 60 * 60 * 24 * 365));
    }, 0) / users.length
  );

  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-value">{nationalityCount}</div>
          <div className="stat-label">Different Nationality</div>
        </div>
        <FontAwesomeIcon icon={faFlag} className="stat-icon" />
      </div>
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-value">{mostGender}</div>
          <div className="stat-label">Most Gender</div>
        </div>
        <FontAwesomeIcon icon={genderIcon} className="stat-icon" />
      </div>
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-value">~{avgAge}</div>
          <div className="stat-label">Average Age</div>
        </div>
        <FontAwesomeIcon icon={faWalking} className="stat-icon" />
      </div>
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-value">~{avgMembership} year</div>
          <div className="stat-label">Average Membership</div>
        </div>
        <FontAwesomeIcon icon={faUsers} className="stat-icon" />
      </div>
    </div>
  );
}

export default DashboardStats;