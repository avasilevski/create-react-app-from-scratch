import React from 'react';

const layout = (props) => (
  <div>
    <div>Toolbar</div>
    <main>
      {props.children}
    </main>
  </div>
);

export default layout;