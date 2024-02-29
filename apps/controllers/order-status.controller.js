import { supabase } from "../configs/supabase.js";

export const updateOrderStatus = async (req, res) => {
  const { brand, storeName, orderStatus, posSaleNo } = req.body;

  const brandData = await supabase.from("brand").select("*").eq("name", brand);
  const outletData = await supabase
    .from("outlet")
    .select("*")
    .eq("name", storeName)
    .limit(1);
  await supabase
    .from("order")
    .update({
      order_status: orderStatus,
    })
    .eq("pos_sales_no", posSaleNo)
    .eq("brand", brandData?.data?.[0]?.id)
    .eq("outlet", outletData?.data?.[0]?.id);

  res.status(200).json({
    isSuccess: true,
  });
};
