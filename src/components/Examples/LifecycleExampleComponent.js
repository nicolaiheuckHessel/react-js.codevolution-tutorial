import React, { useState } from 'react'
import ErrorHandlingLifecycle from '../Lifecycles/ErrorHandlingLifecycle';
import MountingLifecycle from '../Lifecycles/MountingLifecycle';
import UnmountingLifecycle from '../Lifecycles/UnmountingLifecycle';
import UpdatingLifecycle from '../Lifecycles/UpdatingLifecycle';

const LifecycleExampleComponent = () => {
    const [mountUnmountLifecycle, setMountUnmountLifecycle] = useState(true);
    return (
        <>
            <label htmlFor='shouldMountUnmountLifecycle'>Mount UnmountingLifecycle</label>
            <input id='shouldMountUnmountLifecycle' type="checkbox" checked={mountUnmountLifecycle} onChange={e => setMountUnmountLifecycle(e.target.checked)}></input>

            <MountingLifecycle />
            <UpdatingLifecycle />
            {mountUnmountLifecycle && <UnmountingLifecycle />}
            <ErrorHandlingLifecycle />
        </>
    )
}

export default LifecycleExampleComponent
