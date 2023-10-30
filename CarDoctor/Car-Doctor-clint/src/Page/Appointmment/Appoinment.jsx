

const Appoinment = () => {
    return (
        <>
            <p className="text-4xl font-semibold text-center">Appointment page </p>
            <form className="flex flex-col w-1/2 mx-auto space-y-2" >
                <label htmlFor="">Your Name</label>
                <input className="input input-sm input-bordered" type="text" name="" id="" />
                <label htmlFor="">Car model</label>
                <input className="input input-sm input-bordered" type="text" />
                <label htmlFor="">On date</label>
                <input className="input input-sm input-bordered" type="number" />
                <label htmlFor="">Description</label>
                <textarea className="input input-sm input-bordered" name="" id="" cols="20" rows="30"></textarea>
                <input className="btn btn-success" type="submit" />
            </form>
        </>
    );
};

export default Appoinment;