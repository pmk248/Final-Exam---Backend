import { Request, Response } from 'express';
import Event from '../models/Event';

export const getDeadliestAttackTypes = async (req: Request, res: Response) => {
  try {
    const result = await Event.aggregate([
      { $group: { _id: '$attacktype1_txt', totalDeaths: { $sum: '$nkill' } } },
      { $sort: { totalDeaths: -1 } },
      { $limit: 5 },
    ]);

    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server Error' });
  }
};

export const getHighestCasualtyRegions = async (req: Request, res: Response) => {
    try {
      const result = await Event.aggregate([
        { $group: { _id: '$region_txt', casualties: { $sum: { $add: ['$nkill', '$nwound'] } } } },
        { $sort: { casualties: -1 } },
        { $limit: 5 },
      ]);
  
      res.status(200).json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
};

  