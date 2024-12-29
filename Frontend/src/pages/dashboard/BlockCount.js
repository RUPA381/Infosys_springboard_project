import BusinessIcon from '@mui/icons-material/Business';
function BlockCount(){
    return(
        <div className="flex flex-col w-[20%] p-2 space-y-3 bg-orange-200 rounded-md text-orange-600">
            <div className="flex flex-row justify-between items-center">
                <div className='font-bold text-4xl'>2</div>
                <div className='rounded-full bg-white p-0.5'><BusinessIcon/></div>
            </div>
            <div className='text-xs text-center'>Total no of blocks</div>
        </div>
    )
}
export default BlockCount