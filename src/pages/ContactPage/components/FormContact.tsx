import { FormContactComponent } from "../../../types/types"

export const FormContact:React.FC<FormContactComponent> = ({
    handleSubmit,
    formContact,
    errors,
    handleChange
}) => {
    return (
        <form
        className="w-1/2 flex flex-col items-start"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="infos-address-phone-input-div">
          <label htmlFor="name" className="infos-address-phone-label">
            Your Name
          </label>
          <p className="message-error">{errors.name ? errors.name : ""}</p>
          <input
            id="name"
            type="text"
            className="infos-address-phone-input"
            placeholder="Ex: Sabrina"
            value={formContact.name}
            onChange={handleChange}
          />
        </div>
        <div className="infos-address-phone-input-div">
          <label htmlFor="email" className="infos-address-phone-label">
            Email address
          </label>
          <p className="message-error">
            {errors.email ? errors.email : ""}
          </p>
          <input
            type="email"
            id="email"
            className="infos-address-phone-input"
            placeholder="ex: Your_email@gmail.com"
            value={formContact.email}
            onChange={handleChange}
          />
        </div>
        <div className="infos-address-phone-input-div">
          <label htmlFor="subject" className="infos-address-phone-label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="infos-address-phone-input"
            placeholder="This is an optional"
            value={formContact.subject}
            onChange={handleChange}
          />
        </div>
        <div className="infos-address-phone-input-div">
          <label htmlFor="message" className="infos-address-phone-label">
            Message
          </label>
          <p className="message-error">
            {errors.message ? errors.message : ""}
          </p>
          <input
            type="text"
            id="message"
            className="infos-address-phone-input h-[120px]"
            placeholder="Hi! i’d like to ask about"
            value={formContact.message}
            onChange={handleChange}
          />
        </div>
        <div className="my-[50px]">
          <button
            type="submit"
            className="w-[237px] h-14 bg-yellow-550 rounded  text-white btn-transparent "
          >
            Submit
          </button>
        </div>
      </form>
    )
}