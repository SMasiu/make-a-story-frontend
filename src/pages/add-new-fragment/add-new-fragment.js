import React from 'react';
import Button from '../../components/button/button';
import './add-new-fragment.css';

const AddNewFragment = () => (
    <section className="new-fragment-wrapper">
        <div className="new-fragment-inner-wrapper">
            <form>

                <h1>Add new fragment</h1>

                <textarea className="inp-secondary" rows="20"/>
                
                <div className="new-fragment-footer">
                    <Button>Add</Button>
                </div>

            </form>
        </div>
    </section>
)

export default AddNewFragment;