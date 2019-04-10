import React, {Component} from 'react';

export default class budget_planner_component extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoPriority = this.onChangeTodoPriority.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            todo_responsible: e.target.value
        });
    }

    onChangeTodoPriority(e) {
        this.setState({
            todo_priority: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
        console.log(`Todo Responsible: ${this.state.todo_responsible}`);
        console.log(`Todo Priority: ${this.state.todo_priority}`);
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{marginTop: 20}}>
                <h1>Lets create a new tour plan</h1>
                <br/>
                <br/>
                <br/>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Select start place</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Colombo</option>
                            <option>Kandy</option>
                            <option>Rathnapura</option>
                            <option>Galle</option>
                            <option>Matara</option>
                            <option>Tangalle</option>
                            <option>Hambantota</option>
                            <option>Kegalle</option>
                            <option>NuwaraEliya</option>
                            <option>Badulla</option>
                            <option>Bandarawela</option>
                            <option>Ampara</option>
                            <option>Anuradhapura</option>
                            <option>Jaffna</option>
                            <option>Trincomalle</option>
                            <option>Gampaha</option>
                            <option>Hikkaduwa</option>
                            <option>Ambalangoda</option>
                            <option>Kaluthara</option>
                            <option>Kurunagala</option>
                            <option>Yapahuwa</option>
                            <option>Sigiriya</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Select destination</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Colombo</option>
                            <option>Kandy</option>
                            <option>Rathnapura</option>
                            <option>Galle</option>
                            <option>Matara</option>
                            <option>Tangalle</option>
                            <option>Hambantota</option>
                            <option>Kegalle</option>
                            <option>NuwaraEliya</option>
                            <option>Badulla</option>
                            <option>Bandarawela</option>
                            <option>Ampara</option>
                            <option>Anuradhapura</option>
                            <option>Jaffna</option>
                            <option>Trincomalle</option>
                            <option>Gampaha</option>
                            <option>Hikkaduwa</option>
                            <option>Ambalangoda</option>
                            <option>Kaluthara</option>
                            <option>Kurunagala</option>
                            <option>Yapahuwa</option>
                            <option>Sigiriya</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Select your hotel</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Digana - Kurunagala</option>
                            <option>Alankuda Beach	- Ettalai Alankuda	 </option>
                            <option>Kassapa Lions Rock Hotel - Digampathaha Kimbissa Dambulla	 </option>
                            <option>Paragon Ayurveda And Holistic Health Resort	- Talpe	</option>
                            <option>Ranveli Beach Resort -  Mount Lavinia</option>
                            <option>Sanasa Holiday Resorts  - Toppass Nuwara Eliya</option>
                            <option>Humbugs Restaurant -Hakgala Nuwara Eliya</option>
                            <option>Hilton Colombo	- Colombo 02</option>
                            <option>Hotel Eden Garden -  Dambulla</option>
                            <option>Randholee Luxury Resort	- Kandy</option>
                            <option>Senkada Rest -  Kandy</option>
                            <option>Stardust Casino	- Colombo 03</option>
                            <option>Midky Hotel (Pvt) Ltd	-  Bambarakele Nuwara Eliya1</option>
                        </select>
                    </div>
                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Select travelling mode</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>Car</option>
                            <option>Van</option>
                            <option>Bus</option>
                            <option>Safari</option>
                        </select>
                    </div>

                    <div className="form-group col-md-4">
                        <label htmlFor="inputState">Select number of persons travelled</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>less than 3</option>
                            <option>between 4 - 6</option>
                            <option>between 6 - 10</option>
                            <option>greater than 10</option>

                        </select>
                    </div>
                    <br/>

                    <label htmlFor="inputState">Do you need to book now?</label>

                    <div className="radio">
                        <label><input type="radio" name="optradio" checked/>Book Now</label>
                    </div>

                    <div className="radio">
                        <label><input type="radio" name="optradio" checked/>Book Later</label>
                    </div>

                    <br/>
                    <label htmlFor="inputState">Do you need a guider ?</label>

                    <div className="radio">
                        <label><input type="radio" name="guiderradio" checked/>I require a guider</label>
                    </div>

                    <div className="radio">
                        <label><input type="radio" name="guiderradio" checked/>I do not require a guider</label>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Plan my budget" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}