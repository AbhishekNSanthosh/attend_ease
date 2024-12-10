
import Attendance from "@models/Attendence";
import { connectToDB } from "@utils/database";

export async function POST(req: any, res: any) {
    try {
        // Connect to the database
        await connectToDB();

        // Fetch all distinct dates from the Attendance collection
        const attendanceDates = await Attendance.find({}, { date: 1, _id: 0 }).distinct("date");

        return new Response(
            JSON.stringify({ dates: attendanceDates }),
            { status: 200 }
        );
    } catch (err) {
        console.error(err);
        return new Response(
            JSON.stringify({ message: "Internal Server Error" }),
            { status: 500 }
        );
    }
}
