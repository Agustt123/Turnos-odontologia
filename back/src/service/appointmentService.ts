import { assert } from "console";
import { Turno, TurnoStatus } from "../entities/appointment";
import { User } from "../entities/user";
import IScheduleAppointmentDto from "../interface/ISheduleAppointmentDto";
import { Appointment } from "../interface/appointment";
import { appointmentsModel, userModel } from "../config/data-source";
import { CANCELLED } from "dns";

export const scheduleAppointmentService = async( scheduleDto:IScheduleAppointmentDto): Promise<Appointment> => {
    const user: User| null= await userModel.findOneBy({
        id: scheduleDto.userId,
    });
    if (!user)throw Error ("Usuario inexistente  ");
    const newAppoiontment : Appointment = appointmentsModel.create(scheduleDto);
    await appointmentsModel.save(newAppoiontment);
    
    newAppoiontment.user=user;
    await appointmentsModel.save(newAppoiontment);
    return newAppoiontment;
}

export const getAllApointmentService = async():Promise<Appointment[]> =>{
const allAppointments: Appointment[]= await appointmentsModel.find();
return allAppointments;
}

export const getAppointmentByIdService= async (turnId:number)
:Promise<Appointment> => {
    const appointment : Appointment|null= await appointmentsModel.findOneBy({
        id: turnId,
    })
  if (!appointment) throw Error ("Turno inexistente ");
  return appointment;
}

export const cancelAppointmentService = async (
    turnID:number
): Promise<void> => {
    const appointment: Appointment|null= await appointmentsModel.findOneBy({
        id: turnID,
        
    });
    if (!appointment)throw Error( "Turno Inexistente");
    appointment.status= TurnoStatus.CANCELLED;
    await appointmentsModel.save(appointment);
}