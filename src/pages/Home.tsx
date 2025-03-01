import React from 'react';

function Home() {
  return (
    <div className="home">
      <h1>Ana Sigorta - DASK</h1>
      <div className="content">
        <p>Doğal Afet Sigortaları Kurumu (DASK) ile evinizi güvence altına alın.</p>
        <div className="features">
          <div className="feature">
            <h3>Zorunlu Deprem Sigortası</h3>
            <p>Depremin neden olabileceği maddi hasarlara karşı güvence.</p>
          </div>
          <div className="feature">
            <h3>Hızlı ve Kolay Başvuru</h3>
            <p>Online başvuru ile hemen poliçenizi alın.</p>
          </div>
          <div className="feature">
            <h3>7/24 Destek</h3>
            <p>Hasar durumunda 7/24 yanınızdayız.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 