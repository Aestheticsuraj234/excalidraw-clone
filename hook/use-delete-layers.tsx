import {useSelf , useMutation} from '@/liveblocks.config';

export const UseDeleteLayers = ()=>{
    const selection = useSelf((me)=>me.presence.selection);
    return useMutation(({storage,setMyPresence})=>{
        const liveLayers = storage.get("layers");
        const livelayerIds = storage.get("layerIds");

        for(const id of selection)
        {
            liveLayers.delete(id);
            const index = livelayerIds.indexOf(id);

            if(index !== -1){
                livelayerIds.delete(index);
            }
        }

        setMyPresence({selection:[]},{addToHistory:true});

    },[
        selection
    ])
}