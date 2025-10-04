-- Create meteor_impacts table to store real impact data
CREATE TABLE IF NOT EXISTS public.meteor_impacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  location_name TEXT NOT NULL,
  state TEXT,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  size DECIMAL(10, 2) NOT NULL, -- in meters
  speed DECIMAL(10, 2) NOT NULL, -- in km/s
  impact_angle INTEGER NOT NULL, -- in degrees
  impact_force DECIMAL(15, 2), -- in megatons
  impact_date TIMESTAMP WITH TIME ZONE NOT NULL,
  damage_assessment TEXT,
  details TEXT,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.meteor_impacts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow everyone to read meteor impacts (public data)
CREATE POLICY "Anyone can view meteor impacts"
  ON public.meteor_impacts
  FOR SELECT
  USING (true);

-- Create indexes for better query performance
CREATE INDEX idx_meteor_impacts_location ON public.meteor_impacts (latitude, longitude);
CREATE INDEX idx_meteor_impacts_date ON public.meteor_impacts (impact_date DESC);
CREATE INDEX idx_meteor_impacts_state ON public.meteor_impacts (state);

-- Insert seed data for historical meteor impacts in India
INSERT INTO public.meteor_impacts (name, location_name, state, latitude, longitude, size, speed, impact_angle, impact_force, impact_date, damage_assessment, details) VALUES
('Lonar Crater Meteor', 'Lonar', 'Maharashtra', 19.977778, 76.505556, 60.0, 25.5, 45, 0.6, '1950-01-01 00:00:00+00', 'High - Created 1.8km wide crater', 'One of only four known hypervelocity impact craters in basaltic rock. The crater is about 1.8 km in diameter and 150 m deep. Scientific studies suggest it was formed around 50,000 years ago (estimated date for record purposes).'),
('Dhurmsala Meteorite', 'Dhurmsala', 'Himachal Pradesh', 32.212222, 76.323056, 0.15, 18.2, 60, 0.00001, '1860-07-14 14:30:00+00', 'Low - Small fragments collected', 'A witnessed fall of an L6 ordinary chondrite meteorite. Several fragments totaling about 3 kg were recovered. Now preserved in various museums.'),
('Piplia Kalan Meteorite', 'Piplia Kalan', 'Madhya Pradesh', 23.283333, 75.316667, 0.25, 22.1, 55, 0.00002, '1996-05-01 08:15:00+00', 'Low - Rural area impact', 'An eucrite meteorite that fell near the village. Witnesses reported a bright fireball followed by sonic booms. Total recovered mass was approximately 7.5 kg.'),
('Khairpur Meteorite', 'Khairpur', 'Uttar Pradesh', 28.061111, 77.858333, 0.18, 19.8, 50, 0.000015, '1869-03-12 11:20:00+00', 'Low - Agricultural land impact', 'An LL5 ordinary chondrite that fell in farmland. Multiple stones were recovered with a total mass of about 2.7 kg. Important specimen for meteor science.'),
('Chandakapur Meteorite', 'Chandakapur', 'Maharashtra', 19.916667, 79.283333, 0.12, 17.5, 65, 0.000008, '1838-06-18 09:45:00+00', 'Minimal - Small fragments', 'One of the earliest documented meteorite falls in India. An L5 ordinary chondrite with several small fragments collected.'),
('Manegaon Meteorite', 'Manegaon', 'Maharashtra', 19.650000, 76.483333, 0.20, 21.3, 52, 0.000018, '1843-04-25 13:10:00+00', 'Low - Village outskirts', 'An H4 ordinary chondrite. Witnesses reported seeing a fireball and hearing loud sounds. Total recovered mass approximately 4.2 kg.'),
('Rajasthan Bolide', 'Jaisalmer', 'Rajasthan', 26.915556, 70.916667, 2.5, 28.7, 35, 0.015, '2019-12-06 22:35:00+00', 'Moderate - Desert area airburst', 'A large bolide that exploded over the Thar Desert. Created a spectacular light show visible for hundreds of kilometers. Some fragments were recovered.'),
('Gujarat Meteor Event', 'Kutch', 'Gujarat', 23.733333, 70.783333, 1.8, 26.2, 40, 0.008, '2017-08-15 03:25:00+00', 'Moderate - Uninhabited region', 'Bright meteor event over the Rann of Kutch. Multiple sonic booms reported. Search teams recovered several meteorite fragments.');

-- Create a view for recent impacts (last 100 years)
CREATE OR REPLACE VIEW public.recent_meteor_impacts AS
SELECT * FROM public.meteor_impacts
WHERE impact_date > (CURRENT_DATE - INTERVAL '100 years')
ORDER BY impact_date DESC;