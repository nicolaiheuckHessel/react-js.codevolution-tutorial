import './App.css';
import StylingExampleComponent from './components/Examples/StylingExampleComponent';
import BeforeEpisode15Examples from './components/Examples/BeforeEpisode15Examples';
import LifecycleExampleComponent from './components/Examples/LifecycleExampleComponent';
import RenderingExamples from './components/Examples/RenderingExamples';
import UseEffectExample from './components/UseEffectExample';
import { useState } from 'react';
import ContextHooksExample from './components/Examples/ContextHooksExample';
import UseCallbackExample from './components/Examples/UseCallbackExample';
import UseMemoExample from './components/Examples/UseMemoExample';
import UseRefExample from './components/Examples/UseRefExample';

function App() {
  // const [showUseEffect, setShowUseEffect] = useState(true)
  return (
    <div className="App">
      {/* <LifecycleExampleComponent /> */}
      {/* <StylingExampleComponent /> */}
      {/* <BeforeEpisode15Examples /> */}
      {/* <RenderingExamples /> */}

      {/* <button onClick={() => setShowUseEffect(!showUseEffect)}>Toggle UseEffectExample</button><br/>
      {showUseEffect && <UseEffectExample />} */}
      
      {/* <ContextHooksExample /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}
      <UseRefExample />

    </div>
  );
}

export default App
