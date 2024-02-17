import React from 'react'
import './newTask.css'

const NewTask = () => {
  return (
    <div className='newTaskContainer'>
      <h1 id='header'><span style={{marginRight: '1rem'}}><a href="/">&lt;</a></span>New Task</h1>

      <form action="/submitTask" method='post' id='form'>
        <div className='formSection'>
        <label htmlFor="title" className='label'>Task Title</label><br />
        <input type="text" id='title' name='title' className='input' style={{width: '100%', padding:'15px 25px'}} placeholder='E.g Project Defense, Assignment ...' required /><br /><br />
        </div>

        <div className='formSection'>
        <label htmlFor="description" className='label'>Description</label><br />
        <textarea name="description" id="description" className='input' rows="8" placeholder='Briefly describe your task ...' style={{width: '100%', padding:'15px 25px'}} required></textarea><br /><br />
        </div>

        <div className='formSection'>
        <label htmlFor="tags" className='label'>Tags</label><br />
        <input list='tags' name='tags' className='input' placeholder='Urgent; Important' style={{width: '100%', padding:'15px 25px'}} />
        <datalist id='tags'>
          <option value="Urgent"></option>
          <option value="Important"></option>
        </datalist><br /><br />
        </div>

        <input id='submit' type="submit" value={'Done'} style={{width: '100%', height: '60px', color: 'white', backgroundColor: '#974FD0', fontSize: '24px', border: 'none', borderRadius: '8px'}} />
      </form>

      <div className='topLink'><a href="#">Back to the Top</a></div>
    </div>
  )
}

export default NewTask