import { Request, Response } from "express";
import message from "../modules/responseMessage";
import statusCode from "../modules/statusCode";
import util from "../modules/util";
import { FarmService } from "../services";

/**
 *  @route GET /farm?fruit=&address=
 *  @desc Read Farms by fruit and address
 *  @access Private
 */
const getFarmsByFruitAndAddress = async (req: Request, res: Response) => {
    const { fruit, address } = req.query;

    try {
        const data = await FarmService.getFarmsByFruitAndAddress(
            fruit as string,
            address as string
        );
        if (!data)
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_FARM_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

/**
 *  @route GET /farm/:farmId
 *  @desc Read Farm by farmId
 *  @access Private
 */
const getFarmByFarmId = async (req: Request, res: Response) => {
    const { farmId } = req.params;

    try {
        const data = await FarmService.getFarmByFarmId(farmId);

        if (!data)
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_FARM_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

/**
 *  @route GET /farm/:farmId/reservation
 *  @desc Read Reservation by farmId
 *  @access Private
 */
const getReservationByFarmId = async (req: Request, res: Response) => {
    const { farmId } = req.params;

    try {
        const data = await FarmService.getReservationByFarmId(farmId);

        if (!data)
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_RESERVATION_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

/**
 *  @route GET /farm/tour
 *  @desc Read Tour
 *  @access Private
 */
const getTour = async (req: Request, res: Response) => {
    try {
        const data = await FarmService.getTour();

        if (!data)
            return res
                .status(statusCode.NOT_FOUND)
                .send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));

        res.status(statusCode.OK).send(
            util.success(statusCode.OK, message.READ_TOUR_SUCCESS, data)
        );
    } catch (error) {
        console.log(error);
        // 서버 내부에서 오류 발생
        res.status(statusCode.INTERNAL_SERVER_ERROR).send(
            util.fail(
                statusCode.INTERNAL_SERVER_ERROR,
                message.INTERNAL_SERVER_ERROR
            )
        );
    }
};

export default {
    getFarmsByFruitAndAddress,
    getFarmByFarmId,
    getReservationByFarmId,
    getTour,
};
