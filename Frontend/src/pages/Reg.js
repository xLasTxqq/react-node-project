import React from 'react';
import {observer} from 'mobx-react-lite'

const Reg = observer(()=>{
		return (
			<div className="d-flex flex-column justify-content-sm-center vh-100 align-items-center text-center pady">
				 <div className="messages"></div>

				 <div className="form-group container-sm">
				 <label htmlFor="form_name">Никнейм *</label>
				 <input id="form_name" type="text" name="name" className="form-control text-center" placeholder="Пожалуйста придумайте свой ник *" required="required" data-error="Firstname is required." />
				 <div className="help-block with-errors"></div>
				 </div>
				 <div className="form-group container-sm mt-3">
				 <label htmlFor="form_lastname">Логин *</label>
				 <input id="form_lastname" type="text" name="surname" className="form-control text-center" placeholder="Пожалуйста придумайте свой логин *" required="required" data-error="Lastname is required." />
				 <div className="help-block with-errors"></div>
				 </div>

				 <div className="form-group container-sm mt-3">
				 <label htmlFor="form_email">Почта *</label>
				 <input id="form_email" type="email" name="email" className="form-control text-center" placeholder="Пожалуйста введите свою почту *" required="required" data-error="Valid email is required." />
				 <div className="help-block with-errors"></div>
				 </div>

				 <div className="form-group container-sm mt-3">
				 <label htmlFor="form_phone">Телефон</label>
				 <input id="form_phone" type="tel" name="phone" className="form-control text-center" placeholder="Пожалуйста укажите свой телефон" />
				 <div className="help-block with-errors"></div>
				 </div>
				 <button type="submit" className="btn btn-primary btn-send mt-3">Зарегистрироваться</button>
			</div>
		);
});

export default Reg
