import React from 'react'
import CustomButtom from './CustomButtom'

const FilePicker = ({file, setFile, readFile}) => {
  return (
    <div className='filepicker-container'>
      <div className='flex-1 flex flex-col'>
        <input 
          id='file-upload'
          type='file'
          accept='imge/*'
          onChange={(e) => setFile(e.target.files[0])}
        />
        <label htmlFor='file-upload' className='filepicker-label'>
          Upload File
        </label>
        <p className='m-2 text-gray-600 text-xs truncate' >
          {file === '' ? 'No file selected' : file.name}
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-3'>
        <CustomButtom
          type="outline"
          title='Logo'
          handleClick={() => readFile('logo')}
          customStyles='text-xs'
        />
        <CustomButtom
          type="filled"
          title='Full'
          handleClick={() => readFile('full')}
          customStyles='text-xs'
        />

      </div>
    </div>
  )
}

export default FilePicker
