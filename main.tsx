import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

declare const __BUILD_TIME__: string;

const updatedAt = new Date(__BUILD_TIME__).toLocaleString('zh-CN', {
  timeZone: 'Asia/Shanghai',
  hour12: false
});

const checks = [
  ['Source', 'GitHub'],
  ['Framework', 'Vite + React + TypeScript'],
  ['Build output', 'dist'],
  ['Gateway', 'accelerator.aliyunesa.com'],
  ['Updated at', `${updatedAt} (UTC+8)`]
];

function App() {
  return (
    <main className="shell">
      <section className="card">
        <span className="badge">ESA Pages Test</span>
        <h1>GitHub acceleration is ready</h1>
        <p className="lead">
          This repository validates source cloning, frontend builds and static deployment.
        </p>
        <dl>
          {checks.map(([label, value]) => (
            <div className="check" key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
